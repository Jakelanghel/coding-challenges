import math

def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None
    
    area = lng * wdth
    res = []

    sq_sizes = [3, 2, 1]
    for i in sq_sizes:
        sq_area = i * i
        num_squares = math.floor(area / sq_area)
        area = area - sq_area * num_squares
        res.extend([i] * num_squares)
    
        
    return res

print(sq_in_rect(20, 14))