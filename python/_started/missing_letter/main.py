import string

def find_missing_letter(chars):
    tst_arr = [char.lower() for char in chars]
    alphabet = list(string.ascii_lowercase)
    start = alphabet.index(tst_arr[0])
    end = alphabet.index(tst_arr[int(len(chars)) - 1 ])
    correct = alphabet[start:end]
    res = None
    for lett in correct:
        if lett not in tst_arr:
            res = lett

    if chars[0].isupper():
        return res.upper()
    
    return res

print(find_missing_letter(['O', 'Q', 'R', 'S']))  # SHOULD BE P NEEDS TO BE CAP AS WELL

