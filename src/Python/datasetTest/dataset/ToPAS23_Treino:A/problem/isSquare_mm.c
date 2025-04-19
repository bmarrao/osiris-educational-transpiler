#include<stdio.h>

/**
 * @author Margarida Mamede
 */

int main( ) {
    int side1, side2;
    scanf("%d %d", &side1, &side2);
    printf("%d\n", side1 * side2);
    if ( side1 == side2 )
        printf("QUADRADO\n");
    return 0;
}
