#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX 15
#define CONTR 12

int isbnControlo(char * linha);

int main(){
    char linha[MAX];
    int controlo;
    fgets(linha, MAX-1,stdin);
    controlo = isbnControlo(linha);
    if ((linha[CONTR]-'0')==controlo)
        printf("OK\n");
    else
        printf("ERRO %d\n",controlo);
    return 0;
}

int isbnControlo(char * linha){
    int sum=0;
    for (int i=0;i<12;i=i+2){
        sum = sum + (linha[i]-'0') + (linha[i+1]-'0')*3;
    }
    sum = 10 -(sum%10);
    if (sum == 10) return 0;
    return sum;
}