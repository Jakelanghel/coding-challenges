#include <stdio.h>
#include <string.h>

char tst[] = "hello world";

void count_vowels_and_cons(char input_string[], int *vowel_count, int *cons_count) {
    int str_len = strlen(input_string);
    *vowel_count = 0; // Initialize vowel count
    *cons_count = 0;  // Initialize consonant count

    for (int i = 0; i < str_len; i++) {
        // Check if the character is a lowercase letter
        if (input_string[i] >= 'a' && input_string[i] <= 'z') {
            if (input_string[i] == 'a' || input_string[i] == 'e' || 
                input_string[i] == 'i' || input_string[i] == 'o' || 
                input_string[i] == 'u') {
                (*vowel_count)++; // Increment vowel count
            } else {
                (*cons_count)++; // Increment consonant count
            }
        }
    }
}

int main() {
    int vowels, consonants;
    count_vowels_and_cons(tst, &vowels, &consonants);
    printf("Vowels: %i, Consonants: %i\n", vowels, consonants);
    return 0;
}
