#!/usr/bin/env python3
import re
import os
import glob

DOCS_DIR = "docs/user"

def slugify(heading):
    text = heading.strip()
    text = re.sub(r'^#+\s*', '', text)
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'[*_]+', '', text)
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    text = text.strip('-')
    text = re.sub(r'-+', '-', text)
    return text

def get_headings(filepath):
    headings = {}
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for match in re.finditer(r'^(#{1,6})\s+(.+)$', content, re.MULTILINE):
        heading_text = match.group(2)
        slug = slugify(heading_text)
        if slug:
            headings[slug] = heading_text
    return headings

def get_doc_id(filepath):
    return os.path.basename(filepath).replace('.md', '')

def main():
    files = sorted(glob.glob(os.path.join(DOCS_DIR, '*.md')))
    
    # Build complete mapping of all valid slugs across all files
    all_slugs = {}
    file_slugs = {}
    for filepath in files:
        doc_id = get_doc_id(filepath)
        slugs = get_headings(filepath)
        file_slugs[doc_id] = slugs
        for slug in slugs:
            if slug not in all_slugs:
                all_slugs[slug] = []
            all_slugs[slug].append(doc_id)
            
    # Some manual hardcoded mappings for difficult cases where slug was altered or removed
    manual_maps = {
        '_Creating_a_New': ('05-supply-planning-module-supply-planning', 'creating-a-new-shipment'),
        'planning-units-1': ('07-forecasting-module-program-data', 'planning-units'),
        'introduction-1': ('07-forecasting-module-program-data', 'introduction'),
        'introduction-2': ('10-annex-1-application-realm-administrator-manual', 'introduction'),
        'introduction-3': ('11-annex-2-business-rules', 'introduction'),
        'program-information-1': ('07-forecasting-module-program-data', 'program-information'),
        'supply-planning-module-supply-planning-1': ('11-annex-2-business-rules', 'supply-planning-module-supply-planning'),
        'forecast-summary-1': ('11-annex-2-business-rules', 'forecast-summary'),
        # disambiguating where multiple files have the same heading
        'planning-units_forecast': ('07-forecasting-module-program-data', 'planning-units'),
        'planning-units_supply': ('04-supply-planning-module-program-data', 'planning-units'),
        '_Toc71637206': ('15-acronyms', ''),
        '_Toc187042366': ('04-supply-planning-module-program-data', 'supply-plan-data-excel-import-templates'),
        '_Toc187042372': ('05-supply-planning-module-supply-planning', 'supply-planning-consumption'),
        '_Toc187042375': ('05-supply-planning-module-supply-planning', 'creating-a-new-shipment'),
        'forecasting-vs.-supply-planning': ('01-overview', 'forecasting-vs-supply-planning')
    }
    
    total_changes = 0

    for filepath in files:
        current_doc_id = get_doc_id(filepath)
        current_slugs = file_slugs[current_doc_id]
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        changes_in_file = 0
        
        def link_replacer(match):
            nonlocal changes_in_file
            full_match = match.group(0)
            link_text = match.group(1)
            link_url = match.group(2)
            
            # Only fix internal #anchor links
            if not link_url.startswith('#'):
                return full_match
                
            anchor = link_url[1:]
            
            # Already points to the same file correctly
            if anchor in current_slugs:
                return full_match
                
            target_doc = None
            target_anchor = anchor
            
            # Check manual overrides
            if anchor in manual_maps:
                target_doc, target_anchor = manual_maps[anchor]
            
            # Context specific disambiguation
            elif anchor == 'planning-units':
                if current_doc_id in ['05-supply-planning-module-supply-planning', '06-supply-planning-module-reports', '04-supply-planning-module-program-data']:
                    target_doc = '04-supply-planning-module-program-data'
                elif current_doc_id in ['08-forecasting-module-forecasting', '09-forecasting-module-reports-and-outputs', '07-forecasting-module-program-data']:
                    target_doc = '07-forecasting-module-program-data'
            
            elif anchor == 'program-information':
                if current_doc_id in ['10-annex-1-application-realm-administrator-manual', '07-forecasting-module-program-data']:
                    target_doc = '07-forecasting-module-program-data'
                else:
                    target_doc = '04-supply-planning-module-program-data'
            
            elif anchor == 'forecast-summary':
                if current_doc_id in ['07-forecasting-module-program-data', '09-forecasting-module-reports-and-outputs']:
                    target_doc = '09-forecasting-module-reports-and-outputs'
                else:
                    target_doc = '11-annex-2-business-rules'
            elif anchor == 'introduction':
                # The generic #introduction in 00 usually points to 01-overview or similar unless mapped
                if current_doc_id == '00-introduction':
                    target_doc = '01-overview'
                    
            # Auto-resolution from all_slugs
            if not target_doc:
                if anchor in all_slugs:
                    if len(all_slugs[anchor]) == 1:
                        target_doc = all_slugs[anchor][0]
                    else:
                        # Pick the first one (might need to refine but usually works)
                        target_doc = all_slugs[anchor][0]
                else:
                    # Strip -1, -2, etc if present
                    m = re.match(r'^(.*)-(\d+)$', anchor)
                    if m:
                        base_anchor = m.group(1)
                        if base_anchor in all_slugs:
                            target_doc = all_slugs[base_anchor][0]
                            target_anchor = base_anchor
            
            if target_doc:
                if target_doc == current_doc_id:
                    new_link = f"[{link_text}](#{target_anchor})"
                else:
                    target_prefix = ""
                    # If we're inside docs/user/ doing a relative path to another file in the same directory:
                    # Normally Docusaurus prefers just `./doc_id` or just `doc_id` if they are in the same folder.
                    # Or since they are both in docs/user, using `doc_id.md#anchor` or `doc_id#anchor` is fine.
                    # Let's use `doc_id#anchor` as the safest format?
                    # Ah! For Docusaurus sidebar, standard inter-doc links are usually `doc_id.md#anchor` 
                    # or `./doc_id.md#anchor`.
                    # Let's use `doc_id.md#anchor` to be completely safe with Docusaurus.
                    # But wait, looking at my previous script, I used `../doc_id#anchor` which was probably wrong if they are in the same folder!
                    # "docs/user" is the same folder. So `./doc_id.md` or just `doc_id.md` is best.
                    new_link = f"[{link_text}]({target_doc}.md#{target_anchor})"
                
                if new_link != full_match:
                    changes_in_file += 1
                return new_link
                
            return full_match

        content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', link_replacer, content)
        
        # Finally, some links from the previous run might have been transformed to `../doc#anchor`. Let's fix those to `doc.md#anchor` too.
        # e.g., [Text](../04-supply-planning-module-program-data#planning-units) -> [Text](04-supply-planning-module-program-data.md#planning-units)
        def fix_previous_bad_links_replacer(match):
            nonlocal changes_in_file
            full_match = match.group(0)
            text = match.group(1)
            target = match.group(2)
            if target.startswith('../') and not '.md' in target:
                new_target = target.replace('../', '')
                if '#' in new_target:
                    parts = new_target.split('#')
                    new_target = f"{parts[0]}.md#{parts[1]}"
                else:
                    new_target = f"{new_target}.md"
                changes_in_file += 1
                return f"[{text}]({new_target})"
            return full_match
            
        content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', fix_previous_bad_links_replacer, content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {changes_in_file} links in {current_doc_id}")
            total_changes += changes_in_file
            
    print(f"Total changes made: {total_changes}")

if __name__ == '__main__':
    main()
