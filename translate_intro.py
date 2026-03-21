import os
import re

updates = {
    'es': 'Introducción',
    'fr': 'Introduction',
    'pt': 'Introdução'
}

for lang, title in updates.items():
    filepath = f"i18n/{lang}/docusaurus-plugin-content-docs/current/user/00-introduction.md"
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = re.sub(r'^(title:\s*).*$', f'title: "{title}"', content, flags=re.MULTILINE)
        content = re.sub(r'^(sidebar_label:\s*).*$', f'sidebar_label: "{title}"', content, flags=re.MULTILINE)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath} to {title}")
