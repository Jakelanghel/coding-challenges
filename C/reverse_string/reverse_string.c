#include <stdio.h>
#include <string.h>

char* reverse(char input_string[]) { // Change return type to char*
    int str_len = strlen(input_string); // Use input_string
    static char results[256]; // Declare as static to return its address
    for (int i = 0; i < str_len; i++) {
        results[i] = input_string[str_len - 1 - i]; // Fix indexing for reversal
    }
    results[str_len] = '\0'; // Null-terminate the reversed string
    return results; // Return the results array
}

int main() {
    char my_string[] = "Chat GPT had been a huge help with learning to code!";
    char* res = reverse(my_string); // Store the result as a char*
    printf("%s\n", res); // Print the reversed string
    return 0;
}
