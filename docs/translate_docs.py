import os
import re
import time
from deep_translator import GoogleTranslator

def translate_markdown():
    source_dir = os.path.join('user')
    
    if not os.path.exists(source_dir):
        print(f"❌ ERROR: Cannot find the '{source_dir}' folder.")
        return

    target_languages = {
        # 'fr': 'French',
        'es': 'Spanish',
        'pt': 'Portuguese',
        # 'fr': 'French' # Uncomment if you want to redo French too!
    }
    
    for lang_code, lang_name in target_languages.items():
        print(f"\n{'='*50}")
        print(f"🌍 STARTING TRANSLATIONS FOR: {lang_name.upper()} ({lang_code})")
        print(f"{'='*50}")
        
        target_dir = os.path.join('i18n', lang_code, 'docusaurus-plugin-content-docs', 'current', 'user')
        os.makedirs(target_dir, exist_ok=True)
        
        translator = GoogleTranslator(source='en', target=lang_code)
        
        for filename in os.listdir(source_dir):
            if not filename.endswith('.md'):
                continue
                
            target_file = os.path.join(target_dir, filename)
            
            if os.path.exists(target_file):
                print(f"⏭️ Skipping {filename} (Already exists)")
                continue
                
            print(f"\n📄 Processing: {filename} -> {lang_code}...")
            with open(os.path.join(source_dir, filename), 'r', encoding='utf-8') as f:
                content = f.read()
                
            # 1. Protect Frontmatter
            fm_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
            if fm_match:
                frontmatter = f"---\n{fm_match.group(1)}\n---\n"
                body = content[fm_match.end():]
            else:
                frontmatter = ""
                body = content

            # 2. Protect Full <style>...</style> blocks (Protects all CSS code)
            style_blocks = list(set(re.findall(r'<style[^>]*>[\s\S]*?</style>', body, re.IGNORECASE)))
            for i, block in enumerate(style_blocks):
                body = body.replace(block, f'ZXCSTYLE{i}ZXC')
                
            # 3. Protect Markdown Code Blocks (```code```)
            code_blocks = list(set(re.findall(r'```[\s\S]*?```', body)))
            for i, cb in enumerate(code_blocks):
                body = body.replace(cb, f'ZXCCODE{i}ZXC')

            # 4. Protect Inline Code Snippets (`code`)
            inline_code = list(set(re.findall(r'`[^`]+`', body)))
            for i, ic in enumerate(inline_code):
                body = body.replace(ic, f'ZXCINLINE{i}ZXC')

            # 5. Protect Image links (![alt](url))
            images = list(set(re.findall(r'!\[.*?\]\(.*?\)', body)))
            for i, img in enumerate(images):
                body = body.replace(img, f'ZXCIMG{i}ZXC')

            # 6. Protect robust HTML tags (Safely captures style="..." without breaking)
            html_tags = list(set(re.findall(r'<[a-zA-Z\/](?:[^>"\']|"[^"]*"|\'[^\']*\')*>', body)))
            for i, tag in enumerate(html_tags):
                body = body.replace(tag, f'ZXCHTML{i}ZXC')
                
            # Split by paragraphs and translate
            paragraphs = body.split('\n\n')
            translated_paragraphs = []
            current_batch = []
            current_length = 0
            
            for p in paragraphs:
                if len(p) > 4000:
                    sub_chunks = [p[i:i+4000] for i in range(0, len(p), 4000)]
                    for sc in sub_chunks:
                        translated_paragraphs.append(translate_with_retry(translator, sc))
                else:
                    if current_length + len(p) < 4000:
                        current_batch.append(p)
                        current_length += len(p) + 2
                    else:
                        batch_text = '\n\n'.join(current_batch)
                        translated_paragraphs.append(translate_with_retry(translator, batch_text))
                        current_batch = [p]
                        current_length = len(p) + 2
                        
            if current_batch:
                batch_text = '\n\n'.join(current_batch)
                translated_paragraphs.append(translate_with_retry(translator, batch_text))

            safe_paragraphs = [str(p) if p is not None else "" for p in translated_paragraphs]
            translated_body = '\n\n'.join(safe_paragraphs)
            
            # --- RESTORATION PHASE ---
            # We use `lambda m: tag` to ensure Python's Regex engine doesn't accidentally 
            # delete backslashes inside your CSS and inline styles!

            # Restore HTML Tags
            for i, tag in enumerate(html_tags):
                pattern = re.compile(rf'ZXCHTML\s*{i}\s*ZXC', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=tag: t, translated_body)

            # Restore Image links
            for i, img in enumerate(images):
                pattern = re.compile(rf'ZXCIMG\s*{i}\s*ZXC', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=img: t, translated_body)

            # Restore Inline Code
            for i, ic in enumerate(inline_code):
                pattern = re.compile(rf'ZXCINLINE\s*{i}\s*ZXC', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=ic: t, translated_body)
                
            # Restore Code Blocks
            for i, cb in enumerate(code_blocks):
                pattern = re.compile(rf'ZXCCODE\s*{i}\s*ZXC', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=cb: t, translated_body)

            # Restore Style Blocks
            for i, block in enumerate(style_blocks):
                pattern = re.compile(rf'ZXCSTYLE\s*{i}\s*ZXC', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=block: t, translated_body)
                
            # Save the file
            with open(target_file, 'w', encoding='utf-8') as f:
                f.write(frontmatter + translated_body)
                
            print(f"✅ Saved: {target_file}")

def translate_with_retry(translator, text, retries=3):
    if not text or not text.strip():
        return text if text is not None else ""
        
    if re.fullmatch(r'ZXC[A-Z]+[0-9]+ZXC', text.strip()):
        return text
        
    for attempt in range(retries):
        try:
            result = translator.translate(text)
            if result is None:
                raise ValueError("Google API returned None")
            time.sleep(1.5) 
            return result
        except Exception as e:
            print(f"   ⚠️ API Error (Attempt {attempt+1}/{retries}). Waiting to retry...")
            time.sleep(2 ** (attempt + 1)) 
            
    print("   ❌ Translation failed for this chunk. Keeping original text.")
    return text

if __name__ == "__main__":
    translate_markdown()