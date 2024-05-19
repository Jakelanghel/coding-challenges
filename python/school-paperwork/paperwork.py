

# n= 5, m=5: 25
# n=-5, m=5:  0

def paperwork(n, m):
    if n < 0 or m < 0 :
        return 0
    else:
        return n * m
    


paperwork(5, 5)