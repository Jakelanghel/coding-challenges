import string
from collections import Counter

def text_analysis(text: str) -> dict:
    translator = str.maketrans(" ", " ", string.punctuation)
    cleaned_txt = text.translate(translator).lower().split()
    total_words = len(cleaned_txt)
    unique_words = len(set(cleaned_txt))
    word_freq = Counter(cleaned_txt)
    most_common_word = word_freq.most_common(1)[0]

    # Construct the result dictionary
    result = {
        'total_words': total_words,
        'unique_words': unique_words,
        'word_frequencies': dict(word_freq),
        'most_common_word': most_common_word
    }
        
    return result
  
        
text = "Hello, world! Hello everyone. This is a test. This test is only a test."

print(text_analysis(text))