


def find_missing_letter(chars):
    # Determine the starting point based on the first character's case
    is_upper = chars[0].isupper()
    
    # Convert characters to lowercase if necessary for uniform processing
    normalized_chars = [char.lower() for char in chars]
    
    # Iterate over pairs of consecutive characters
    for i in range(len(normalized_chars) - 1):
        # Find the ASCII values of the current character and the next character
        current_char = normalized_chars[i]
        next_char = normalized_chars[i + 1]
        
        # If the difference between consecutive characters is more than 1, a letter is missing
        if ord(next_char) - ord(current_char) > 1:
            missing_char = chr(ord(current_char) + 1)
            return missing_char.upper() if is_upper else missing_char
    
    # If no letter is missing in the sequence
    return None


print(find_missing_letter(['O', 'Q', 'R', 'S'])) 

