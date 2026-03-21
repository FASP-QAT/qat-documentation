#!/usr/bin/env python3
import re
import os
import glob

# Base English docs used to build the source of truth for anchor to file mapping
EN_DOCS_DIR = "docs/user"

# Target directories to apply fixes to
TARGET_DIRS = [
    "i18n/es/docusaurus-plugin-content-docs/current/user",
    "i18n/fr/docusaurus-plugin-content-docs/current/user",
    "i18n/pt/docusaurus-plugin-content-docs/current/user",
]

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
    en_files = sorted(glob.glob(os.path.join(EN_DOCS_DIR, '*.md')))
    
    # Build complete mapping of all valid slugs across all ENGLISH files
    # The translators left the anchors in English (e.g. #shipment-data), so we need 
    # to know which file that anchor lives in based on the English docs.
    all_slugs_en = {}
    file_slugs_en = {}
    for filepath in en_files:
        doc_id = get_doc_id(filepath)
        slugs = get_headings(filepath)
        file_slugs_en[doc_id] = slugs
        for slug in slugs:
            if slug not in all_slugs_en:
                all_slugs_en[slug] = []
            all_slugs_en[slug].append(doc_id)
            
    manual_maps = {
        '_Creating_a_New': ('05-supply-planning-module-supply-planning', 'creating-a-new-shipment'),
        'planning-units-1': ('07-forecasting-module-program-data', 'planning-units'),
        'introduction-1': ('07-forecasting-module-program-data', 'introduction'),
        'introduction-2': ('10-annex-1-application-realm-administrator-manual', 'introduction'),
        'introduction-3': ('11-annex-2-business-rules', 'introduction'),
        'program-information-1': ('07-forecasting-module-program-data', 'program-information'),
        'supply-planning-module-supply-planning-1': ('11-annex-2-business-rules', 'supply-planning-module-supply-planning'),
        'forecast-summary-1': ('11-annex-2-business-rules', 'forecast-summary'),
        'planning-units_forecast': ('07-forecasting-module-program-data', 'planning-units'),
        'planning-units_supply': ('04-supply-planning-module-program-data', 'planning-units'),
        '_Toc71637206': ('15-acronyms', ''),
        '_Toc187042366': ('04-supply-planning-module-program-data', 'supply-plan-data-excel-import-templates'),
        '_Toc187042372': ('05-supply-planning-module-supply-planning', 'supply-planning-consumption'),
        '_Toc187042375': ('05-supply-planning-module-supply-planning', 'creating-a-new-shipment'),
        'forecasting-vs.-supply-planning': ('01-overview', 'forecasting-vs-supply-planning')
    }
    
    total_changes = 0

    for target_dir in TARGET_DIRS:
        if not os.path.exists(target_dir):
            print(f"Directory {target_dir} not found. Skipping.")
            continue
            
        print(f"\nProcessing directory: {target_dir}")
        target_files = sorted(glob.glob(os.path.join(target_dir, '*.md')))
        
        for filepath in target_files:
            current_doc_id = get_doc_id(filepath)
            
            # Use the english slugs for the current doc as the "local" anchors 
            # (since the translator used English anchor links, we must compare against english slugs)
            current_en_slugs = file_slugs_en.get(current_doc_id, {})
            
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
                
                # In Spanish/French, if the anchor belongs to the CURRENT file 
                # (according to the English mapping), we can just leave it as is 
                # or replace it. Leaving it as is works (even though clicking might not fully 
                # jump if they haven't explicitly set the anchor id, but that's standard Docusaur 
                # limitation, we just want to fix the 404 cross-doc links).
                if anchor in current_en_slugs:
                    return full_match
                    
                target_doc = None
                target_anchor = anchor
                
                if anchor in manual_maps:
                    target_doc, target_anchor = manual_maps[anchor]
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
                    if current_doc_id == '00-introduction':
                        target_doc = '01-overview'
                        
                if not target_doc:
                    if anchor in all_slugs_en:
                        target_doc = all_slugs_en[anchor][0]
                    else:
                        m = re.match(r'^(.*)-(\d+)$', anchor)
                        if m:
                            base_anchor = m.group(1)
                            if base_anchor in all_slugs_en:
                                target_doc = all_slugs_en[base_anchor][0]
                                target_anchor = base_anchor
                
                if target_doc:
                    if target_doc == current_doc_id:
                        new_link = f"[{link_text}](#{target_anchor})"
                    else:
                        new_link = f"[{link_text}]({target_doc}.md#{target_anchor})"
                    
                    if new_link != full_match:
                        changes_in_file += 1
                    return new_link
                    
                return full_match
    
            content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', link_replacer, content)
            
            # Fix existing incorrect cross-doc links from any previous runs
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
            
    print(f"\nTotal changes made across all languages: {total_changes}")

if __name__ == '__main__':
    main()
