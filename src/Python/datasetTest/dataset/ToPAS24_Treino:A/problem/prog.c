#include <stdio.h>

int main(){
  int n;

  scanf("%d",&n);

  if (n == 0) printf("%d zero!\n",n);
  else if (n > 0) printf("%d positivo!\n",n);
  else printf("%d negativo!\n",n);

  return 0;
}
