#include <stdio.h>




 void fizz_buzz() {
    for( int i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 ==0) {
            printf("FIZBUZZ\n");
        }else if(i % 3 ==0 ){
            printf("FIZZ\n");
        }else if (i % 5 == 0) {
            printf("BUZZ\n");
        }else {
            printf("%d\n", i);
        }
    };

    
};

int main() {
    fizz_buzz();
    return 0;
};
