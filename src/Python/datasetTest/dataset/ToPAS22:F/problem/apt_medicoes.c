// apt

#include <stdio.h>

int verifica(int n);
void lixo(int j,int n);   // consome o resto

void lixo(int j,int n){
  int v; 
  for( ; j< n; j++)
    scanf("%d",&v);
}

int verifica(int n){
  int jprim, vprim = -1, v, j, k;
  
  for (jprim=0; jprim < n; jprim++) {
    scanf("%d",&vprim);
    if (vprim >= 0)
      break;
  }

  if (jprim == n) return 1;  // possivel
  
  if (vprim < jprim) {
    lixo(jprim+1,n);   // consumir resto
    return 0;  // impossível
  }

  for (j= jprim+1; j < n; j++) {
       scanf("%d",&v);
       if (v >= 0)
	 break;
  } 

  if (j == n) return 1;
  if (v - vprim  < j-jprim || (v-vprim)%(j-jprim) != 0)  {
    lixo(j+1,n); 
    return 0;
  }

  k = (v-vprim)/(j-jprim);
  if (vprim < jprim*k)  {
    lixo(j+1,n);
    return 0;
  }

  for(++j; j<n; j++) {
    scanf("%d",&v);				
    if (v >=0 && v-vprim != (j-jprim)*k) {
       lixo(j+1,n);
       return 0;
    }
  }
  return 1;
}


int main(){
  int e,n;
  scanf("%d",&e);
  while(e-- > 0) {
      scanf("%d",&n);
      if (verifica(n)) printf("Possivel\n");
      else printf("Impossivel\n");
  }
  return 0;
}

    

  



  
    
