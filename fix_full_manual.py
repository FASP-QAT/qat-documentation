import glob
import os

files = glob.glob('docs/user/*.md')
files.sort()

order = []
for f in files:
    with open(f, 'r') as file:
        pos = 100
        for line in file:
            if line.startswith('sidebar_position:'):
                pos = int(line.split(':')[1].strip())
                break
        order.append((pos, os.path.basename(f)))

order.sort()

for i, (pos, name) in enumerate(order):
    print(f"// {name} (pos: {pos})")
