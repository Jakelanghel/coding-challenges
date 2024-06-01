# Text analysis

Write a function that takes a string of text and returns a dictionary with the following information:

    The total number of words.
    The number of unique words.
    The frequency of each word.
    The most common word and its frequency.

Requirements:

    Ignore punctuation.
    Treat words as case-insensitive (e.g., "Word" and "word" should be considered the same).
    Use Python's built-in string methods and collections module where appropriate.

```
    text = "Hello, world! Hello everyone. This is a test. This test is only a test."

    result = text_analysis(text)
    print(result)
     Expected output:
     {
         'total_words': 11,
         'unique_words': 8,
         'word_frequencies': {
             'hello': 2,
             'world': 1,
             'everyone': 1,
             'this': 2,
             'is': 2,
             'a': 2,
             'test': 3,
             'only': 1
         },
         'most_common_word': ('test', 3)
     }
``
```
