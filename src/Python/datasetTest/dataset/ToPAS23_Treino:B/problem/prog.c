#include <stdio.h>

#define MAXC 100

int main() {
  char seq[MAXC+1];
  int n, m;

  scanf("%d\n",&m);
  for(n=0; (seq[n] = getchar()) != '\n'; n++);


  seq[n] = '\0';
  do {
    n--;
  } while(seq[n] != ' ');



  while(m-- > 0) printf("%s\n",&seq[n+1]);

  return 0;
}
