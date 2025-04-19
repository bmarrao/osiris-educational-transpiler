#include <stdio.h>

#define MAX 25
int main(){
    char linha[MAX];
    int a,b;
    fgets(linha,MAX-1,stdin);
    sscanf(linha,"%d %d",&a,&b);
    if (a>b)
        printf("%d\n",a);
    else
        printf("%d\n",b);
}