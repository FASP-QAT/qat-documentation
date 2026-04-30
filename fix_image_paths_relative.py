import os

docs_dir = '/home/altius/Documents/altius_project/qat-documentation/docs'
static_dir = '/home/altius/Documents/altius_project/qat-documentation/static'

for root, dirs, files in os.walk(docs_dir):
    for file in files:
        if file.endswith('.md') or file.endswith('.mdx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Calculate relative path to static
            rel_path = os.path.relpath(static_dir, os.path.dirname(file_path))
            
            updated = False
            # Replace my previously broken absolute paths
            if '](/qat-documentation/img/' in content:
                print(f'Replacing broken absolute img path in {file_path}')
                content = content.replace('](/qat-documentation/img/', f']({rel_path}/img/')
                updated = True
                
            if '](/qat-documentation/diagrams/' in content:
                print(f'Replacing broken absolute diagram path in {file_path}')
                content = content.replace('](/qat-documentation/diagrams/', f']({rel_path}/diagrams/')
                updated = True
                
            # Also replace any remaining original absolute paths just in case
            if '](/img/' in content:
                print(f'Replacing original absolute img path in {file_path}')
                content = content.replace('](/img/', f']({rel_path}/img/')
                updated = True
                
            if '](/diagrams/' in content:
                print(f'Replacing original absolute diagram path in {file_path}')
                content = content.replace('](/diagrams/', f']({rel_path}/diagrams/')
                updated = True
                
            if updated:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
