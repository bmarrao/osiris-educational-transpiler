#include <stdio.h>

#define MAX 100

int main(){
    char linha[MAX];
    int n,r,soma=0;
    fgets(linha,MAX-1,stdin);
    sscanf(linha,"%d",&n);
    for(int i=0;i<n;i++){
        fgets(linha,MAX-1,stdin);
        fgets(linha,MAX-1,stdin);
        sscanf(linha,"%d",&r);
        soma = soma+r;
    }
    printf("%d\n",soma);
}