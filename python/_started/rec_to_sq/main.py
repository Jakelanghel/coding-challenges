import math

def sq_in_rect(lng, wdth):
    solved = False
    if lng == wdth:
        return None
    res = []
    
    x = lng if lng < wdth else wdth
    y = lng if lng > wdth else wdth

    while solved == False:
        total_area = x * y
        sq_area = x * x
        num_of_sqs = total_area // sq_area
        # print(total_area)
        # print(sq_area)
        # print(num_of_sqs)

        if num_of_sqs != 0:
            # print(sq_area)
            # print(num_of_sqs)
            res.extend([x] * num_of_sqs)
            area_to_sub = sq_area * num_of_sqs
            total_area = total_area - area_to_sub 
            y = y - x
            print(y)

        else:
            x = x - 1
        if total_area == 0:
            # print(total_area)
            # print(sq_area)
            # print(num_of_sqs)
            solved = True
          



    # x = lng if lng < wdth else wdth
    # y = lng if lng > wdth else wdth
    # total_area = x * y
    # biggest_sq = x * x
    # num_of_big_sq = total_area // biggest_sq
    # res.extend([x] * num_of_big_sq)
    # y = y - x
    # total_area = total_area - biggest_sq

        
        
       



       


    print(res)
    return res

sq_in_rect(20, 14) # should return [14, 6, 6, 2, 2, 2]