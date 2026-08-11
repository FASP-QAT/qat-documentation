import re
import os

files = [
    "i18n/es/docusaurus-plugin-content-docs/current/user/18-acronyms.md",
    "i18n/fr/docusaurus-plugin-content-docs/current/user/18-acronyms.md",
    "i18n/pt/docusaurus-plugin-content-docs/current/user/18-acronyms.md"
]

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Split frontmatter
    parts = content.split("---", 2)
    if len(parts) < 3:
        continue
    
    frontmatter = "---" + parts[1] + "---"
    body = parts[2]

    # Find the heading at the bottom
    # It usually starts with # Acrónimos, # Acronymes, # Siglas
    match = re.search(r'\n(#[^\n]+)\n+(.*?)(?=\Z)', body, re.DOTALL)
    if match:
        heading_and_text = match.group(1) + "\n\n" + match.group(2).strip() + "\n\n"
        
        # Remove it from the bottom
        body = body[:match.start()].strip() + "\n"
        
        # Assemble
        new_content = frontmatter + "\n" + heading_and_text + body
        
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
            print(f"Fixed {fpath}")

