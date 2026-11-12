import json

with open("study-guide-reader.html", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find READER_EXACT_FILE_MAP
idx = text.find("READER_EXACT_FILE_MAP")
if idx != -1:
    print("Found READER_EXACT_FILE_MAP")
    sub_idx = text.find('"microeconomic-foundation":', idx)
    end_idx = text.find('},', sub_idx)
    print(text[sub_idx:end_idx+2])
