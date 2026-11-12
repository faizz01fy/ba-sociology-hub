import json

with open("study-guide-reader.html", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('"microeconomic-foundation":')
next_sub = text.find('"arabic":', idx)
print(text[idx:next_sub])
