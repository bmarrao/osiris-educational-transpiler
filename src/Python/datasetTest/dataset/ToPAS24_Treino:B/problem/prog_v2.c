#include <stdio.h>

int main(){
  char s;
  int k,n,t;

  scanf("%d %d",&k,&t);
  
  for(int i=0; i< k+t; i++)  {
    scanf("%d %c",&n,&s);
    printf("%c",s);
    for (int j=1;j<n;j++)
      printf(" %c",s);
    putchar('\n');
  }

  return 0;
}

  

   
  
  
