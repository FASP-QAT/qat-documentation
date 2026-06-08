import os
import re
import time
from deep_translator import GoogleTranslator

def translate_markdown():
    source_dir = os.path.join('docs/user')
    
    if not os.path.exists(source_dir):
        print(f"❌ ERROR: Cannot find the '{source_dir}' folder.")
        return

    target_languages = {
        'fr': 'French',
        'es': 'Spanish',
        'pt': 'Portuguese'
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
            
            # Retranslate and overwrite if specifically requested (current behavior now)
            # if os.path.exists(target_file):
            #     print(f"⏭️ Skipping {filename} (Already exists)")
            #     continue
                
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
                body = body.replace(block, f'[{{ZXCSTYLE{i}ZXC}}]')

            # 2b. Protect multi-line HTML/JSX blocks (<div>...</div>, <table>...</table>, <ol>...</ol>)
            # These are blocks that span multiple lines and contain JSX attributes like style={{...}}
            multiline_html_blocks = []
            for tag_name in ['div', 'table', 'ol']:
                pattern = re.compile(
                    rf'^\s*<{tag_name}\b[^>]*>[\s\S]*?</{tag_name}>\s*$',
                    re.MULTILINE | re.IGNORECASE
                )
                for match in pattern.finditer(body):
                    multiline_html_blocks.append(match.group())
            # Sort by length descending so we replace longer blocks first (avoids partial replacements)
            multiline_html_blocks = sorted(set(multiline_html_blocks), key=len, reverse=True)
            for i, block in enumerate(multiline_html_blocks):
                body = body.replace(block, f'[{{ZXCBLOCK{i}ZXC}}]')

            # 2c. Protect entire HTML-heavy lines (lines that are predominantly inline HTML)
            # These are single lines like: <ul><li><strong>Notes:</strong><ul>.....</ul></li></ul>
            html_heavy_lines = []
            for line in body.split('\n'):
                stripped = line.strip()
                if not stripped:
                    continue
                # Line starts with < and contains nested tags — treat as atomic
                if stripped.startswith('<') and stripped.endswith('>') and len(stripped) > 50:
                    html_heavy_lines.append(line)
                # Line contains multiple HTML tags and most content is inside tags
                elif stripped.count('<') >= 4 and stripped.count('>') >= 4:
                    tag_content_len = sum(len(m) for m in re.findall(r'<[^>]+>', stripped))
                    if tag_content_len > len(stripped) * 0.3:
                        html_heavy_lines.append(line)
            # Sort by length descending to replace longer lines first
            html_heavy_lines = sorted(set(html_heavy_lines), key=len, reverse=True)
            for i, line in enumerate(html_heavy_lines):
                body = body.replace(line, f'[{{ZXCHEAVY{i}ZXC}}]')

            # 3. Protect Markdown Code Blocks (```code```)
            code_blocks = list(set(re.findall(r'```[\s\S]*?```', body)))
            for i, cb in enumerate(code_blocks):
                body = body.replace(cb, f'[{{ZXCCODE{i}ZXC}}]')

            # 4. Protect Inline Code Snippets (`code`)
            inline_code = list(set(re.findall(r'`[^`]+`', body)))
            for i, ic in enumerate(inline_code):
                body = body.replace(ic, f'[{{ZXCINLINE{i}ZXC}}]')

            # 5. Protect Image links (![alt](url))
            images = list(set(re.findall(r'!\[.*?\]\(.*?\)', body)))
            for i, img in enumerate(images):
                body = body.replace(img, f'[{{ZXCIMG{i}ZXC}}]')

            # 6. Protect robust HTML tags (Safely captures style="..." without breaking)
            html_tags = list(set(re.findall(r'<[a-zA-Z\/](?:[^>"\']|"[^"]*"|\'[^\']*\')*>', body)))
            for i, tag in enumerate(html_tags):
                body = body.replace(tag, f'[{{ZXCHTML{i}ZXC}}]')

            # 7. Protect stray Comparison Operators and Entities (<, >, &lt;, &gt;)
            # This prevents the translator from decoding &lt; or breaking MDX with literal <
            comparisons = list(set(re.findall(r'&[lg]t;|[<>]', body)))
            for i, comp in enumerate(comparisons):
                body = body.replace(comp, f'[{{ZXCCOMP{i}ZXC}}]')
                
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
            
            # --- STRIP HALLUCINATED HTML TAGS ---
            # Google Translate sometimes outputs HTML tags for markdown formatting.
            # Real HTML tags are safely stored as ZXC placeholders at this point,
            # so any <tag> present here is a hallucination that will break MDX.
            translated_body = re.sub(r'</?(?:b|strong)\b[^>]*>', '**', translated_body, flags=re.IGNORECASE)
            translated_body = re.sub(r'</?(?:i|em)\b[^>]*>', '*', translated_body, flags=re.IGNORECASE)
            # Strip all other hallucinated HTML tags (p, div, a, span, li, ul, ol, table, tr, td, th, sup, sub, br, etc.)
            translated_body = re.sub(r'</?(?:p|div|a|span|li|ul|ol|table|thead|tbody|tr|td|th|sup|sub|br|hr|img|u)\b[^>]*/?>', '', translated_body, flags=re.IGNORECASE)
            
            # Clean up potential duplicate markdown stars generated from the above
            translated_body = re.sub(r'\*\*\*\*', '**', translated_body)
            
            # --- RESTORATION PHASE ---
            # We use `lambda m: tag` to ensure Python's Regex engine doesn't accidentally 
            # delete backslashes inside your CSS and inline styles!
            # Restore in reverse order of protection (most specific first).

            # Restore HTML Tags (individual tags)
            for i, tag in enumerate(html_tags):
                # Ensure <br> tags are self-closing for MDX compatibility
                fixed_tag = re.sub(r'<br\s*>', '<br />', tag, flags=re.IGNORECASE)
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*H\s*T\s*M\s*L\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=fixed_tag: t, translated_body)

            # Restore Image links
            for i, img in enumerate(images):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*I\s*M\s*G\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=img: t, translated_body)

            # Restore Inline Code
            for i, ic in enumerate(inline_code):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*I\s*N\s*L\s*I\s*N\s*E\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=ic: t, translated_body)
                
            # Restore Code Blocks
            for i, cb in enumerate(code_blocks):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*C\s*O\s*D\s*E\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=cb: t, translated_body)

            # Restore Style Blocks
            for i, block in enumerate(style_blocks):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*S\s*T\s*Y\s*L\s*E\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=block: t, translated_body)

            # Restore HTML-heavy lines (single lines with dense inline HTML)
            for i, line in enumerate(html_heavy_lines):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*H\s*E\s*A\s*V\s*Y\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=line: t, translated_body)

            # Restore multi-line HTML blocks (<div>...</div>, <table>...</table>, <ol>...</ol>)
            for i, block in enumerate(multiline_html_blocks):
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*B\s*L\s*O\s*C\s*K\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=block: t, translated_body)

            # Restore Comparisons as safe entities for MDX compatibility
            for i, comp in enumerate(comparisons):
                # Ensure literal < and > are converted to entities to avoid JSX parsing errors
                safe_comp = comp
                if comp == '<': safe_comp = '&lt;'
                elif comp == '>': safe_comp = '&gt;'
                
                pattern = re.compile(rf'\[{{\s*Z\s*X\s*C\s*C\s*O\s*M\s*P\s*{i}\s*Z\s*X\s*C\s*}}\]', re.IGNORECASE)
                translated_body = pattern.sub(lambda m, t=safe_comp: t, translated_body)
                
            # --- POST-PROCESSING FIXES FOR MDX ---
            # 1. Final safety net: strip any remaining hallucinated HTML tags that appeared after restoration
            # Only strip tags that are NOT legitimate (i.e., not part of restored placeholders)
            # We check for any bare <tag> that doesn't have JSX-style attributes (style={{...}})
            # This catches edge cases where Google Translate hallucinates tags around restored content
            
            # 2. Fix scrambled closing tags caused by Google Translate reordering placeholders
            translated_body = re.sub(r'</li>\s*</li>\s*</ol>', '</li></ol></li>', translated_body)
            translated_body = re.sub(r'</ol>\s*</li>\s*</li>', '</li></ol></li>', translated_body)
            
            # 3. Fix MDX paragraph parsing errors caused by hallucinated double newlines inside inline <li> tags
            translated_body = re.sub(r'\n\n([^<]*</li>)', r' \1', translated_body)
            
            # 4. Known French dropped closing tag
            translated_body = translated_body.replace('<u> doivent être téléchargés, <u>', '<u> doivent être téléchargés, </u>')
            translated_body = translated_body.replace('<u> doivent être téléchargés', 'doivent être téléchargés')
            
            # 5. Fix unbalanced tags globally to prevent MDX compilation errors
            for tag in ['u', 'b', 'i', 'strong', 'em', 'sup', 'sub']:
                open_tag = f'<{tag}>'
                close_tag = f'</{tag}>'
                # Simple check for exact tags. If count is mismatched, strip all instances of that tag.
                if translated_body.count(open_tag) != translated_body.count(close_tag):
                    translated_body = re.sub(rf'</?{tag}\b[^>]*>', '', translated_body, flags=re.IGNORECASE)
            
            # Save the file
            with open(target_file, 'w', encoding='utf-8') as f:
                f.write(frontmatter + translated_body)
                
            print(f"✅ Saved: {target_file}")

def translate_with_retry(translator, text, retries=3):
    if not text or not text.strip():
        return text if text is not None else ""
        
    if re.fullmatch(r'(\s*\[\{ZXC[A-Z]+[0-9]+ZXC\}\]\s*)+', text.strip()):
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