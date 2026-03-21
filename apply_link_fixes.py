#!/usr/bin/env python3
"""
Apply link fixes to user docs.
Changes internal #anchor links to cross-document links where the anchor
exists in a different file after the docs were split.
"""

import re
import os

DOCS_DIR = "docs/user"

# Map of: (source_file, anchor) -> target_doc_id
# The target_doc_id is the Docusaurus doc ID (filename without .md)
# Format: "target_doc_id#anchor"

# We define the fixes based on the analysis output.
# Key: anchor slug that needs fixing
# Value: target doc file (without .md) + "#" + anchor
# We also track which source files need which fixes.

# Build a comprehensive mapping of anchor -> which file it belongs to
ANCHOR_TO_FILE = {
    # 00-introduction.md headings (table of contents - many links to other files) 
    # These are mostly correct within the file or point to section titles
    
    # 01-overview.md
    "important-qat-concepts-and-terms": "01-overview",
    
    # 02-getting-started.md
    "navigation-and-menu-bar": "02-getting-started",
    "qat-helpdesk-and-tickets": "02-getting-started",
    "tickets-for-addingupdating-users-and-master-data": "02-getting-started",
    "qat-dashboard": "02-getting-started",
    "database-translation": "10-annex-1-application-realm-administrator-manual",
    
    # 03-managing-programs-and-versions.md
    "downloaddelete": "03-managing-programs-and-versions",
    "upload": "03-managing-programs-and-versions",
    "working-with-program-data": "03-managing-programs-and-versions",
    "export": "03-managing-programs-and-versions",
    "qat-forecast-import": "04-supply-planning-module-program-data",
    "closing-and-addressing-problems": "06-supply-planning-module-reports",
    "version-comparison": "03-managing-programs-and-versions",
    "supply-plan-version-and-review-supply-plan-module-only": "03-managing-programs-and-versions",
    
    # 04-supply-planning-module-program-data.md
    "consumption-data": "04-supply-planning-module-program-data",
    "inventory-data": "04-supply-planning-module-program-data",
    "shipment-data": "04-supply-planning-module-program-data",
    "erp-shipment-linking": "04-supply-planning-module-program-data",
    "planning-units": "04-supply-planning-module-program-data",  # Supply planning context
    "program-information": "04-supply-planning-module-program-data",
    "programprocurement-agent-specific-information": "04-supply-planning-module-program-data",
    "alternate-reporting-units": "04-supply-planning-module-program-data",
    
    # 05-supply-planning-module-supply-planning.md
    "supply-planning-project-expired-stock-and-batch-information": "05-supply-planning-module-supply-planning",
    "creating-a-new-shipment": "05-supply-planning-module-supply-planning",
    "supply-plan-report": "05-supply-planning-module-supply-planning",
    
    # 06-supply-planning-module-reports.md
    "forecast-error-monthly": "06-supply-planning-module-reports",
    
    # 07-forecasting-module-program-data.md
    "equivalency-units": "07-forecasting-module-program-data",
    "version-settings": "07-forecasting-module-program-data",
    "forecasting-planning-units": "07-forecasting-module-program-data",  # planning-units in forecast context
    
    # 08-forecasting-module-forecasting.md
    "tree-forecasts": "08-forecasting-module-forecasting",
    "extrapolation": "08-forecasting-module-forecasting",
    "importinputting-actuals": "08-forecasting-module-forecasting",
    "adjustments": "08-forecasting-module-forecasting",
    "building-a-tree": "08-forecasting-module-forecasting",
    "modeling-validations": "08-forecasting-module-forecasting",
    "product-validations": "08-forecasting-module-forecasting",
    "using-templates": "08-forecasting-module-forecasting",
    "compare-and-select": "09-forecasting-module-reports-and-outputs",
    
    # 09-forecasting-module-reports-and-outputs.md
    "forecasting-module-reports-and-outputs": "09-forecasting-module-reports-and-outputs",
    "monthly-forecast": "09-forecasting-module-reports-and-outputs",
    "forecast-summary": "09-forecasting-module-reports-and-outputs",
    "regional-view": "09-forecasting-module-reports-and-outputs",
    "national-view": "09-forecasting-module-reports-and-outputs",
    
    # 10-annex-1
    "annex-1-application-realm-administrator-manual": "10-annex-1-application-realm-administrator-manual",
    "application-dashboard": "10-annex-1-application-realm-administrator-manual",
    "managing-master-data": "10-annex-1-application-realm-administrator-manual",
    "application-masters": "10-annex-1-application-realm-administrator-manual",
    "realm-masters": "10-annex-1-application-realm-administrator-manual",
    "product": "10-annex-1-application-realm-administrator-manual",
    "setting-up-a-new-program": "10-annex-1-application-realm-administrator-manual",
    "resetting-the-qat-problem-list": "10-annex-1-application-realm-administrator-manual",
    "label-translation": "10-annex-1-application-realm-administrator-manual",
    
    # 11-annex-2
    "annex-2-business-rules": "11-annex-2-business-rules",
    "supply-planning-module-qat-problem-list": "11-annex-2-business-rules",
    "data-quality": "11-annex-2-business-rules",
    "procurement-schedule": "11-annex-2-business-rules",
    "supply-planning": "11-annex-2-business-rules",
    "other-manual-problems": "11-annex-2-business-rules",
    "supply-planning-module-other-qat-reports": "11-annex-2-business-rules",
    "forecasting-module-tree-forecasts": "11-annex-2-business-rules",
    "forecasting-module-consumption-forecast": "11-annex-2-business-rules",
    "forecasting-module-reports-outputs": "11-annex-2-business-rules",
    "compare-select": "11-annex-2-business-rules",
    "supply-planning-and-forecasting-module-uploading-versions": "11-annex-2-business-rules",
    
    # 12-annex-3
    "annex-3-user-role-matrix": "12-annex-3-user-role-matrix",
    
    # 13-annex-4
    "annex-4-business-functions": "13-annex-4-business-functions",
    
    # 14-annex-5
    "annex-5-pipeline-program-import": "14-annex-5-pipeline-program-import",
}


def get_headings(filepath):
    """Extract all heading slugs from a file."""
    headings = set()
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for match in re.finditer(r'^#{1,6}\s+(.+)$', content, re.MULTILINE):
        heading_text = match.group(1)
        slug = slugify(heading_text)
        if slug:
            headings.add(slug)
    return headings


def slugify(heading):
    """Convert a markdown heading to a Docusaurus slug/anchor."""
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


def get_doc_id(filepath):
    """Get the doc ID from filepath."""
    return os.path.basename(filepath).replace('.md', '')


def fix_file(filepath):
    """Fix broken links in a single file."""
    doc_id = get_doc_id(filepath)
    local_headings = get_headings(filepath)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    changes = []
    
    def replace_link(match):
        full_match = match.group(0)
        link_text = match.group(1)
        link_url = match.group(2)
        
        # Only process internal anchor links
        if not link_url.startswith('#'):
            return full_match
        
        anchor = link_url[1:]
        
        # Special case: #_Creating_a_New -> should be #creating-a-new-shipment (same file 05)
        if anchor == '_Creating_a_New':
            new_link = f'[{link_text}](#creating-a-new-shipment)'
            if full_match != new_link:
                changes.append(f"  Fixed: {anchor} -> #creating-a-new-shipment")
            return new_link
        
        # Special case: #planning-units-1 -> should be planning-units in forecasting context
        # In original single doc, planning-units-1 was the second "Planning Units" heading
        # which was in the forecasting module program data section
        if anchor == 'planning-units-1':
            target = '07-forecasting-module-program-data'
            if doc_id == target:
                new_link = f'[{link_text}](#planning-units)'
            else:
                new_link = f'[{link_text}](../{target}#planning-units)'
            changes.append(f"  Fixed: #{anchor} -> {target}#planning-units")
            return new_link
        
        # Special case: #introduction-2, #introduction-3, etc - these were duplicate headings
        # in the original single doc. They map to introduction sections in annex files.
        if anchor == 'introduction-2':
            target = '10-annex-1-application-realm-administrator-manual'
            if doc_id == target:
                return full_match
            new_link = f'[{link_text}](../{target}#introduction)'
            changes.append(f"  Fixed: #{anchor} -> {target}#introduction")
            return new_link
        
        if anchor == 'introduction-3':
            target = '11-annex-2-business-rules'
            if doc_id == target:
                return full_match
            new_link = f'[{link_text}](../{target}#introduction)'
            changes.append(f"  Fixed: #{anchor} -> {target}#introduction")
            return new_link
        
        # Special case: #supply-planning-module-supply-planning-1 was a duplicate heading
        if anchor == 'supply-planning-module-supply-planning-1':
            target = '11-annex-2-business-rules'
            if doc_id == target:
                new_link = f'[{link_text}](#supply-planning-module-supply-planning)'
            else:
                new_link = f'[{link_text}](../{target}#supply-planning-module-supply-planning)'
            changes.append(f"  Fixed: #{anchor} -> {target}#supply-planning-module-supply-planning")
            return new_link
        
        # Special case: #forecast-summary-1 was a duplicate heading
        if anchor == 'forecast-summary-1':
            target = '11-annex-2-business-rules'
            if doc_id == target:
                new_link = f'[{link_text}](#forecast-summary)'
            else:
                new_link = f'[{link_text}](../{target}#forecast-summary)'
            changes.append(f"  Fixed: #{anchor} -> {target}#forecast-summary")
            return new_link

        # If anchor exists locally, no fix needed
        if anchor in local_headings:
            return full_match
        
        # Special handling for "planning-units" anchor in supply planning context files
        # Files 05 reference "planning-units" which is in file 04 (supply planning module)
        if anchor == 'planning-units':
            if doc_id in ['05-supply-planning-module-supply-planning', '06-supply-planning-module-reports']:
                target = '04-supply-planning-module-program-data'
                new_link = f'[{link_text}](../{target}#{anchor})'
                changes.append(f"  Fixed: #{anchor} -> {target}#{anchor}")
                return new_link
            elif doc_id in ['08-forecasting-module-forecasting', '09-forecasting-module-reports-and-outputs']:
                target = '07-forecasting-module-program-data'
                new_link = f'[{link_text}](../{target}#{anchor})'
                changes.append(f"  Fixed: #{anchor} -> {target}#{anchor}")
                return new_link
        
        # Special handling for "program-information" which exists in both 04 and 07
        if anchor == 'program-information':
            if doc_id in ['10-annex-1-application-realm-administrator-manual']:
                # Annex 1 references are to forecasting module program data
                target = '07-forecasting-module-program-data'
                new_link = f'[{link_text}](../{target}#{anchor})'
                changes.append(f"  Fixed: #{anchor} -> {target}#{anchor}")
                return new_link
        
        # Special handling for "forecast-summary" which exists in both 09 and 11
        if anchor == 'forecast-summary':
            if doc_id in ['07-forecasting-module-program-data']:
                # In forecast program data context, this likely refers to forecast reports
                target = '09-forecasting-module-reports-and-outputs'
                new_link = f'[{link_text}](../{target}#{anchor})'
                changes.append(f"  Fixed: #{anchor} -> {target}#{anchor}")
                return new_link

        # Look up the anchor in our mapping
        if anchor in ANCHOR_TO_FILE:
            target = ANCHOR_TO_FILE[anchor]
            if target == doc_id:
                # Same file, keep as is
                return full_match
            new_link = f'[{link_text}](../{target}#{anchor})'
            changes.append(f"  Fixed: #{anchor} -> {target}#{anchor}")
            return new_link
        
        # If not found anywhere, leave unchanged
        return full_match
    
    # Apply replacements
    content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', replace_link, content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n{'='*60}")
        print(f"FIXED: {os.path.basename(filepath)} ({len(changes)} changes)")
        print(f"{'='*60}")
        for c in changes:
            print(c)
    else:
        print(f"OK: {os.path.basename(filepath)} (no changes needed)")
    
    return len(changes)


def main():
    import glob
    files = sorted(glob.glob(os.path.join(DOCS_DIR, '*.md')))
    
    total_changes = 0
    for filepath in files:
        total_changes += fix_file(filepath)
    
    print(f"\n{'='*60}")
    print(f"TOTAL CHANGES: {total_changes}")
    print(f"{'='*60}")


if __name__ == '__main__':
    main()
