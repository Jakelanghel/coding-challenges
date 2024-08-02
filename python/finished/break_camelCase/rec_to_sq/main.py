def sqInRect(length, width):
    # If the dimensions are the same, it's already a square, so return None
    if length == width:
        return None

    squares = []
    
    # Continue cutting squares until one of the dimensions becomes zero
    while length > 0 and width > 0:
        if length > width:
            # Add the largest square possible and update length
            squares.append(width)
            length -= width
        else:
            # Add the largest square possible and update width
            squares.append(length)
            width -= length

    return squares

# Test the function
print(sqInRect(5, 3))  # Output: [3, 2, 1, 1]
print(sqInRect(3, 5))  # Output: [3, 2, 1, 1]
print(sqInRect(6, 6))  # Output: None