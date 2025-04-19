/*
  Problema "Shallow Fake Sunflowers" por Zé Paulo Leal
  Solução por Pedro Vasconcelos
*/
#include <stdio.h>

int down_from(int a, int b) {
  if (a>b) {
    int t = a;
    a = b;
    b = t;
  }

  while(a>0) {
    int t;
    t = a;
    a = b-a;
    b = t;
  }
  return (a == 0 && b == 1);
}


int main (void) {
  int a, b, n;

  scanf("%d\n",&n);
  for(int i=0;i<n;i++) {
    scanf("%d %d\n", &a, &b);
    if(down_from(a,b)) 
      printf("OK\n");
    else
      printf("FAKE\n");
  }
}
