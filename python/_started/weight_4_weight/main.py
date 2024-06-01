tst1 = "56 65 74 100 99 68 86 180 90"
tst2= "103 123 4444 99 2000"   # 2000 103 123 4444 99


def order_weight(s):
    arr = s.split()
    weights = {}
    for num in arr:
        weight = 0
        for i in num:
            weight += int(i)
        weights[num] = weight
    sorted_weights = dict(sorted(weights.items(), key=lambda x: x[0]))
    return " ".join(str(key) for key in sorted_weights.keys())


    # your code


print(order_weight(tst2))