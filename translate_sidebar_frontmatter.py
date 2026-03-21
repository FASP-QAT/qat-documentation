#!/usr/bin/env python3
import re
import os
import glob

TARGET_DIRS = [
    "i18n/es/docusaurus-plugin-content-docs/current/user",
    "i18n/fr/docusaurus-plugin-content-docs/current/user",
    "i18n/pt/docusaurus-plugin-content-docs/current/user",
]

def main():
    total_files_updated = 0
    
    for target_dir in TARGET_DIRS:
        if not os.path.exists(target_dir):
            continue
            
        print(f"\nProcessing {target_dir}...")
        files = sorted(glob.glob(os.path.join(target_dir, '*.md')))
        
        for filepath in files:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Extract the first H1 heading, ignoring any potential HTML or markdown formatting for the title
            # Search for ^# <text>
            h1_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
            if not h1_match:
                # Some files might not have a # heading, fallback to ## if necessary
                h1_match = re.search(r'^##\s+(.+)$', content, re.MULTILINE)
                
            if h1_match:
                extracted_title = h1_match.group(1).strip()
                # Remove markdown formatting like ** or _ from the extracted title for the frontmatter
                extracted_title = re.sub(r'[*_]+', '', extracted_title)
                # Remove HTML tags if any
                extracted_title = re.sub(r'<[^>]+>', '', extracted_title)
                
                # Replace the title and sidebar_label in frontmatter
                original_content = content
                
                # Replace title: "something" => title: "extracted_title"
                content = re.sub(
                    r'^(title:\s*).*$', 
                    lambda m: f'{m.group(1)}"{extracted_title}"', 
                    content, 
                    flags=re.MULTILINE
                )
                
                # Replace sidebar_label: "something" => sidebar_label: "extracted_title"
                content = re.sub(
                    r'^(sidebar_label:\s*).*$', 
                    lambda m: f'{m.group(1)}"{extracted_title}"', 
                    content, 
                    flags=re.MULTILINE
                )
                
                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"  Updated frontmatter in {os.path.basename(filepath)} -> {extracted_title}")
                    total_files_updated += 1
                    
    print(f"\nTotal files updated with translated frontmatter: {total_files_updated}")

if __name__ == '__main__':
    main()
