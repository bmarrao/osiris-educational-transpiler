#include<stdio.h>

/**
 * @author Margarida Mamede
 */

#define MIN_PER_HOUR 60

int readTime( ) {
    int h, m;
    scanf("%d %d", &h, &m);
    return h * MIN_PER_HOUR + m;
}

int main( ) {
    int t_s = readTime();
    int t_e = readTime();
    int t_i = readTime();
    if ( t_s <= t_i && t_i <= t_e )
        printf("Encontram-se\n");
    else
        printf("Desencontram-se\n");
    return 0;
}
