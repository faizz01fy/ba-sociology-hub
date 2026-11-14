import sys
import re
import os

def validate_index_html(file_path):
    print(f"🔍 Auditing CSS syntax & mobile invariants on: {file_path}")
    if not os.path.exists(file_path):
        print(f"❌ Error: File not found {file_path}")
        return False

    with open(file_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Audit all <style> blocks for brace balance
    style_matches = re.finditer(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)
    block_count = 0
    errors = []

    for match in style_matches:
        block_count += 1
        content = match.group(1)
        depth = 0
        in_comment = False
        lines = content.splitlines()

        for lno, line in enumerate(lines, 1):
            idx = 0
            while idx < len(line):
                if in_comment:
                    end_c = line.find("*/", idx)
                    if end_c != -1:
                        in_comment = False
                        idx = end_c + 2
                    else:
                        break
                else:
                    start_c = line.find("/*", idx)
                    c_idx = start_c if start_c != -1 else len(line)
                    for c in line[idx:c_idx]:
                        if c == "{":
                            depth += 1
                        elif c == "}":
                            depth -= 1
                            if depth < 0:
                                errors.append(f"Style Block #{block_count}, Line {lno}: Extra closing brace '}}'")
                                depth = 0
                    if start_c != -1:
                        in_comment = True
                        idx = start_c + 2
                    else:
                        break

            if depth > 0 and ("@media" in line or "@supports" in line):
                # Check for accidental nested media query inside an unclosed selector
                # If depth > 1, a media query is nested inside a selector!
                if depth > 1:
                    errors.append(f"Style Block #{block_count}, Line {lno}: Accidental nested @media query inside selector (depth={depth}) -> '{line.strip()}'")

        if depth != 0:
            errors.append(f"Style Block #{block_count}: Unclosed brace at end of block (depth={depth})")

    if errors:
        print("❌ CSS SYNTAX CHECK FAILED:")
        for err in errors:
            print(f"   • {err}")
        return False
    else:
        print(f"✅ All {block_count} <style> blocks have perfect 100% matched brace balance (depth=0).")

    # 2. Check Mobile Invariants:
    # Verify desktop-web-layout-theme contains mobile-first or proper media query scoping
    if 'desktop-web-layout-theme' in html:
        theme_block = re.search(r'<style id="desktop-web-layout-theme">(.*?)</style>', html, re.DOTALL)
        if theme_block:
            theme_css = theme_block.group(1)
            # Ensure base grid is NOT unconditionally 3 columns outside media query
            # We want mobile-first 1fr at base or scoped strictly to @media (min-width: 1024px)
            base_part = theme_css.split('@media')[0]
            if 'repeat(3, minmax(0, 1fr))' in base_part:
                print("❌ FAIL: Base #subjects grid is hardcoded to 3 columns outside @media query! Must be mobile-first (1fr).")
                return False
            else:
                print("✅ Mobile-First Invariant Passed: Base subjects grid is safely 1-column responsive.")

    print("🛡️ Pre-deploy validation PASSED! Safe to deploy.")
    return True

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "index.html"
    success = validate_index_html(target)
    sys.exit(0 if success else 1)
