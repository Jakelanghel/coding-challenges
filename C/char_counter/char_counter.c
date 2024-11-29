#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct {
    int uppercase;
    int lowercase;
    int special;
} CharCounts;

CharCounts count_char_types(const char *input_string) {
    CharCounts counts = {0, 0, 0}; // Initialize counts to zero
    int str_len = strlen(input_string);

    for (int i = 0; i < str_len; i++) {
        if (isupper(input_string[i])) {
            counts.uppercase++;
        } else if (islower(input_string[i])) {
            counts.lowercase++;
        } else if (!isalnum(input_string[i])) { // Check for special characters
            counts.special++;
        }
    }

    return counts;
}

int main() {
    const char *test_string = "Hello, World! 123";
    CharCounts result = count_char_types(test_string);
    
    printf("Uppercase: %d, Lowercase: %d, Special: %d\n", 
           result.uppercase, result.lowercase, result.special);

    return 0;
}
