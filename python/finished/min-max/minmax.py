tst1 = "1 2 3 4 5"
tst2 = "1 2 -3 4 5"
tst3 = "1 9 3 4 -5" 

tsts = [tst1, tst2, tst3]

def high_and_low(numbers):
    # Split the input string into a list of number strings
    number_list = numbers.split()
    
    # Convert the list of number strings to a list of integers
    number_list = [int(num) for num in number_list]
    
    # Find the maximum and minimum values in the list
    max_num = max(number_list)
    min_num = min(number_list)
    
    # Return the result as a formatted string
    return f"{max_num} {min_num}"

print(high_and_low("8 3 -5555 42 -1 0 0 -9 4 7 4 -4"))


            
            
            
    # x = int("-5")
    # print(x)


 
        
    # return max(arr) + " " + min(arr)



# for num in tsts: 
#     print(min_max(num))




