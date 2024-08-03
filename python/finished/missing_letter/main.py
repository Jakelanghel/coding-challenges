import string

tst1 = ['a','b','c','d','f'] # e
tst2 = ['O','Q','R','S'] # P


def find_missing_letter(s):

    correct = list(string.ascii_uppercase) if s[0].isupper() else list(string.ascii_lowercase)
    
    first_index = correct.index(s[0])
    last_index = correct.index(s[-1]) + 1

    correct = correct[first_index : last_index]
    
    for index, char in enumerate(correct):
        if char != s[index]:
            return char


print(find_missing_letter(tst1))