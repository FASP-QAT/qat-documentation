#!/usr/bin/env python3
"""
Analyze internal links in the user docs folder.
Find all #anchor links and check if the anchor exists in the same file.
If not, find which file contains that heading.
"""

import re
import os
import glob

DOCS_DIR = "docs/user"

def slugify(heading):
    """Convert a markdown heading to a Docusaurus slug/anchor."""
    # Remove markdown formatting
    text = heading.strip()
    # Remove leading # characters
    text = re.sub(r'^#+\s*', '', text)
    # Remove images
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)
    # Remove links but keep text
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove bold/italic markers
    text = re.sub(r'[*_]+', '', text)
    # Convert to lowercase
    text = text.lower().strip()
    # Replace spaces and special chars with hyphens
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    # Remove leading/trailing hyphens
    text = text.strip('-')
    # Collapse multiple hyphens
    text = re.sub(r'-+', '-', text)
    return text

def get_headings(filepath):
    """Extract all headings from a markdown file and return their slugs."""
    headings = {}
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all markdown headings
    for match in re.finditer(r'^(#{1,6})\s+(.+)$', content, re.MULTILINE):
        heading_text = match.group(2)
        slug = slugify(heading_text)
        if slug:
            headings[slug] = heading_text
    return headings

def get_doc_id(filepath):
    """Get the Docusaurus doc ID from a file path."""
    basename = os.path.basename(filepath)
    # Remove .md extension
    doc_id = basename.replace('.md', '')
    return doc_id

def get_links(filepath):
    """Extract all internal #anchor links from a markdown file."""
    links = []
    with open(filepath, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            # Find all markdown links with # anchors
            for match in re.finditer(r'\[([^\]]*)\]\(([^)]*)\)', line):
                link_text = match.group(1)
                link_url = match.group(2)
                # Only internal anchor links
                if link_url.startswith('#'):
                    anchor = link_url[1:]  # Remove the #
                    links.append({
                        'line': line_num,
                        'text': link_text,
                        'anchor': anchor,
                        'full_match': match.group(0)
                    })
    return links

def main():
    # Collect all headings from all files
    all_headings = {}  # slug -> (filepath, heading_text)
    file_headings = {}  # filepath -> {slug: heading_text}
    
    files = sorted(glob.glob(os.path.join(DOCS_DIR, '*.md')))
    
    print("=" * 80)
    print("HEADINGS PER FILE")
    print("=" * 80)
    
    for filepath in files:
        headings = get_headings(filepath)
        file_headings[filepath] = headings
        basename = os.path.basename(filepath)
        print(f"\n--- {basename} ({len(headings)} headings) ---")
        for slug, text in headings.items():
            if slug in all_headings:
                # Duplicate slug
                print(f"  [DUP] {slug} -> {text}")
            else:
                print(f"  {slug} -> {text}")
            all_headings[slug] = (filepath, text)
    
    print("\n" + "=" * 80)
    print("BROKEN LINKS (anchor not found in same file)")
    print("=" * 80)
    
    broken_links = []
    
    for filepath in files:
        headings = file_headings[filepath]
        links = get_links(filepath)
        basename = os.path.basename(filepath)
        
        for link in links:
            anchor = link['anchor']
            if anchor not in headings:
                # Check if it exists in another file
                target_file = None
                if anchor in all_headings:
                    target_file, _ = all_headings[anchor]
                
                broken_links.append({
                    'source_file': filepath,
                    'line': link['line'],
                    'text': link['text'],
                    'anchor': anchor,
                    'full_match': link['full_match'],
                    'target_file': target_file
                })
                
                if target_file:
                    target_basename = os.path.basename(target_file)
                    target_doc_id = get_doc_id(target_file)
                    print(f"\n  {basename}:{link['line']}")
                    print(f"    Link: {link['full_match']}")
                    print(f"    Anchor '{anchor}' found in: {target_basename}")
                    print(f"    Fix: change to ({target_doc_id}#{anchor})")
                else:
                    print(f"\n  {basename}:{link['line']}")
                    print(f"    Link: {link['full_match']}")
                    print(f"    Anchor '{anchor}' NOT FOUND in any file!")
    
    print(f"\n\nTotal broken links: {len(broken_links)}")
    
    # Summary of fixes needed
    print("\n" + "=" * 80)
    print("FIXES NEEDED (grouped by source file)")
    print("=" * 80)
    
    from collections import defaultdict
    by_file = defaultdict(list)
    for bl in broken_links:
        by_file[bl['source_file']].append(bl)
    
    for filepath, links in sorted(by_file.items()):
        basename = os.path.basename(filepath)
        print(f"\n--- {basename} ---")
        for link in links:
            if link['target_file']:
                target_doc_id = get_doc_id(link['target_file'])
                print(f"  Line {link['line']}: ({link['anchor']}) -> ({target_doc_id}#{link['anchor']})")
            else:
                print(f"  Line {link['line']}: #{link['anchor']} -> NOT FOUND ANYWHERE")

if __name__ == '__main__':
    main()
