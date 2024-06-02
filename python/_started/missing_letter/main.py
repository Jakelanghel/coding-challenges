tst1 = "56 65 74 100 99 68 86 180 90"
tst2 = "103 123 4444 99 2000"   # 2000 103 123 4444 99
tst3 = "2000 10003 1234000 44444444 9999 11 11 22 123"   # 11 11 2000 10003 22 123 1234000 44444444 9999


def order_weight(s):
    arr = s.split()
    weights = {}
    for num in arr:
        weight = 0
        for i in num:
            weight += int(i)
       
    print(weights)
    sorted_weights = dict(sorted(weights.items(), key=lambda x: x[0]))
    return " ".join(str(v) for v in sorted_weights.values())



    # your code


print(order_weight(tst3))