import re
import os
import sys
from collections import defaultdict

def fix_sidebar(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist.")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(r'label:\s*"([^"]+)",(\s*className:\s*"api-method ([^"]+)",)?')
    
    seen = defaultdict(int)
    
    def replacer(match):
        label = match.group(1)
        if match.group(2):
            method = match.group(3).upper()
            new_label = f"{label} ({method})"
            seen[new_label] += 1
            if seen[new_label] > 1:
                new_label = f"{new_label} {seen[new_label]}"
            
            return f'label: "{new_label}",{match.group(2)}'
        else:
            seen[label] += 1
            if seen[label] > 1:
                new_label = f"{label} {seen[label]}"
                return f'label: "{new_label}",'
            return match.group(0)
            
    new_content = pattern.sub(replacer, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed {filepath}")

fix_sidebar('docs/generated/api/sidebar.ts')
fix_sidebar('docs/generated/api/v2.12/sidebar.ts')
