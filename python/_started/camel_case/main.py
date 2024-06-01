tst = "The_Stealth-Warrior"


def to_camel_case(text):
    stripped = text.strip()
    if stripped == "":
        return text
    # Split the text on '-' or '_'
    words = text.replace("-", " ").replace("_", " ").split()
    
    # Capitalize each word except the first one and join them together
    camel_case_text = words[0] + ''.join(word.capitalize() for word in words[1:])
    
    return camel_case_text        
    


print(to_camel_case("     "))