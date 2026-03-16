import os
import re

def split_docusaurus_markdown():
    with open('output.md', 'r', encoding='utf-8') as f:
        content = f.read()

    titles = [
        "Overview",
        "Getting Started",
        "Managing Programs and Versions",
        "Supply Planning Module: Program Data",
        "Supply Planning Module: Supply Planning",
        "Supply Planning Module: Reports",
        "Forecasting Module: Program Data",
        "Forecasting Module: Forecasting",
        "Forecasting Module: Reports and Outputs",
        "Annex 1: Application & Realm Administrator Manual",
        "Annex 2: Business Rules",
        "Annex 3: User Role Matrix",
        "Annex 4: Business Functions",
        "Annex 5: PipeLine Program Import"
    ]

    indices = []
    search_start = 0
    
    # We search sequentially so we find the headings in their proper order
    for title in titles:
        # REGEX EXPLANATION:
        # ^\s*#             -> Forces the script to only look at '#' symbols at the BEGINNING of a line
        #                      This completely ignores the Table of Contents links!
        # (?:(?!\n\s*#).){0,150}? -> Allows up to 150 characters of garbage (newlines, images, asterisks)
        #                      between the '#' and the title, so it handles your broken formatting.
        # re.escape(title)  -> Matches the exact section title
        pattern_str = r'^\s*#(?:(?!\n\s*#).){0,150}?' + re.escape(title)
        pattern = re.compile(pattern_str, re.IGNORECASE | re.DOTALL | re.MULTILINE)
        
        match = pattern.search(content, search_start)
        
        if match:
            start_pos = match.start()
            indices.append((start_pos, title))
            # Start searching for the next title AFTER this heading finishes
            search_start = match.end()
        else:
            print(f"WARNING: Could not find section '{title}'")
    
    os.makedirs('docusaurus_docs', exist_ok=True)
    
    # --- Section 0: Introduction ---
    # Slice from the very beginning of the document up to the "Overview" heading
    if indices:
        intro_content = content[0:indices[0][0]]
        write_page("00-introduction.md", "introduction", "Introduction", 0, intro_content)
    
    # --- Sections 1 to 14 ---
    for i in range(len(indices)):
        start_idx = indices[i][0]
        title = indices[i][1]
        
        # Section ends where the next section begins, or at the end of the document
        end_idx = indices[i+1][0] if i + 1 < len(indices) else len(content)
        page_content = content[start_idx:end_idx]
        
        # Clean the title to create a safe filename and Docusaurus ID
        safe_id = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        filename = f"{i+1:02d}-{safe_id}.md"
        
        write_page(filename, safe_id, title, i+1, page_content)

def write_page(filename, page_id, title, position, content):
    frontmatter = f"---\nid: {page_id}\ntitle: \"{title}\"\nsidebar_label: \"{title}\"\nsidebar_position: {position}\n---\n\n"
    
    # Remove existing frontmatter from the introduction page if it already exists
    if position == 0 and content.startswith("---"):
        content = re.sub(r'^---.*?---\n', '', content, flags=re.DOTALL)

    filepath = os.path.join('docusaurus_docs', filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(frontmatter + content.strip() + '\n')
    print(f"Created: {filepath}")

if __name__ == "__main__":
    split_docusaurus_markdown()