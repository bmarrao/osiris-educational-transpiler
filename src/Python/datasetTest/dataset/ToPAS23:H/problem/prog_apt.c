// by apt

#include <stdio.h>

#define MAXNUM 100

void output(int x[],int nx) {
  printf("0,");
  for(int i=0; i < nx; i++) 
    printf("%d",x[i]);
  putchar('\n');
}


void copy(int res[],int s[],int first,int last) {
  for(int i=0; first < last; i++, first++)
    s[i] = res[first];
}


void square(int s[],int res[], int ns){
  int i, j, k, d, pcarry, scarry, aux;

  for(i=0; i < 2*ns; i++)
    res[i] = 0;
  
  
  for(i=0; i < ns; i++) {
    d = s[ns-1-i];
    pcarry = scarry = 0;
    for(j=ns-1,k=2*ns-1-i; j >= 0; j--, k--) {
      aux = s[j]*d+pcarry;
      pcarry = aux/10;
      aux = aux%10;
      res[k] += aux + scarry;
      scarry = res[k]/10;
      res[k] = res[k]%10;
    }
    if (pcarry != 0)  {
      res[k] += pcarry + scarry;
      scarry = res[k]/10;
      res[k] = res[k]%10;
      k--;
    }
    while (scarry != 0) {
      res[k] +=  scarry;
      scarry = res[k]/10;
      res[k] = res[k]%10;
      k--;
    }
  }
}
	
    
  
int main(){
  int m,n, s[MAXNUM], i, res[2*MAXNUM];

  scanf("%d%d",&m,&n);
  for(i=0; i < 2*n; i++) 
    scanf("%d",&s[i]);

  while (m-- > 0) {
    square(s,res,2*n);
    copy(res,s,n,3*n);
    output(s,2*n);
  }

  return 0;
}


