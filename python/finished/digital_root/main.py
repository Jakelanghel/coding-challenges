# 16  -->  1 + 6 = 7
# 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
# 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
# 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2




def digital_root(n):

    while len(str(n)) > 1:
        n = list(str(n))
        for i, dig in enumerate(n):
            n[i] = int(n[i])
        n = sum(n)
    
    return n


def digital_root(n):
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
    return n