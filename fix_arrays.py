import re
import glob

new_array = """const parts = [
  Part18, Part04, Part05, Part06, Part01, Part07, Part08, Part09,
  Part03, Part10, Part11, Part12, Part13, Part14, Part15, Part16, Part17, Part02
];"""

for file in glob.glob('src/components/FullManualContent*.jsx'):
    if 'Base' in file:
        continue
    with open(file, 'r') as f:
        content = f.read()
    
    content = re.sub(r'const parts = \[.*?\];', new_array, content, flags=re.DOTALL)
    
    with open(file, 'w') as f:
        f.write(content)
    print(f"Updated {file}")
