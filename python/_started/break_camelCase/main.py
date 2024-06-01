tst1 = "camelCasing"
tst2 = "identifier"
tst3 = ""

def break_camel(text):
    lastCap = 0
    words = []
    for i, char in enumerate(text):
        if char.isupper():
            words.append(text[lastCap: i])
            lastCap = i

        if i == len(text) - 1:
            words.append(text[lastCap: i + 1])
    return " ".join(words)

print(break_camel(tst1))
print(break_camel(tst2))
print(break_camel(tst3))