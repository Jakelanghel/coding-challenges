import re

def reverse_words(text):
    split_text = re.split(r'(\s+)', text)
    res = []
    for word in split_text: 
        reversed = list(word)
        reversed.reverse()
        res.append("".join(reversed))
    return "".join(res)

test_1 = "This is an example!"
test_2 = "double  spaces"

print(reverse_words(test_1))
print(reverse_words(test_2))