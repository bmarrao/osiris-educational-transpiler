#include <stdio.h>
#include <stdlib.h>

/**
 * @author Margarida Mamede
 */


int main( ) {
  int a1, a2, r1, r2, d;

  scanf("%d %d\n", &a1, &r1);
  scanf("%d %d\n", &a2, &r2);
  d = abs(a1-a2) + abs(r1-r2);
  printf("%d\n", d);
  return 0;
}
