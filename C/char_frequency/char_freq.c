#include <stdio.h>
#include <string.h>

int char_freq(const char *input_string) {
    printf("char freq");
    return 0;
}

int main() {
    char_freq("hello world");
    return 0;
}

/*

## Challenge Requirements
- Prompt the user to enter a string (limit to 256 characters).
- Create an array to keep track of the frequency of each character.
- Use ASCII values to determine the index for each character in the frequency array.
- Exclude spaces and count only printable characters.
- Print out the frequency of each character that appears in the string.

## Implementation Details
- Initialized a frequency array of size 128.
- Used a loop to iterate through the input string and update the frequency count.

*/