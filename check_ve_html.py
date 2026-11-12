with open("voice_explanation.html", "r", encoding="utf-8") as f:
    html = f.read()

print("Length of voice_explanation.html:", len(html))
# Let's search for how subject filtering works
idx = html.find("renderCards")
if idx != -1:
    print(html[idx:idx+1000])
else:
    # let's look for getSubject or similar
    print(html[:1000])
