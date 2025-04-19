/* 
   ToPAS 2024
   Problema X - Dias até ao Natal
   Pedro Vasconcelos, 2024
 */
#include <stdio.h>
#include <assert.h>

int days[] = { 31,28,31,30,31,30,31,31,30,31,30,31 };

int days_until_xmas(int dd, int mm) {
  int total = 0;
  for (int i = mm; i<=12; i++) {
    total = total + days[i-1];
  }
  total = total - dd - 6;
  if(total < 0)
    total = 365+total;
  return total;  
}


int main(void) {
  int dd=0, mm=0;

  scanf("%d %d\n", &dd, &mm);
  assert(dd>=1 && dd<=31 && mm>=1 && mm<=12);
  printf("%d\n", days_until_xmas(dd,mm));
  return 0;
}
