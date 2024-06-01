tst1 = 35231

def digitize(n):
    n_str = str(n)
    results = []
    for i in range(len(n_str) - 1, -1, -1):
        results.append(int(n_str[i]))

    return results

digitize(tst1)  