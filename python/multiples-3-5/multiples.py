def solution(number):
    arr = list(range(1, number))
    multiples = [x if x % 3 == 0 else None for x in range(1, number) ]
    print(multiples)
    pass
    

  
        

solution(10)