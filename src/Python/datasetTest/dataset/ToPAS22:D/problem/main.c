#include <stdio.h>
#define MAX 50

struct _labirinto{
    int lab[MAX][MAX];
    int lin,col;
};

int existe(struct _labirinto * vlab, int * i,int * j, char* c){
    int iL=*i;
    int jL=*j;
    int num= vlab->lab[iL][jL];
    //printf("\n%d %d %d\n",iL,jL, num);
    vlab->lab[iL][jL]=-1;
    int res=1;
    if (iL+1<vlab->lin && vlab->lab[iL+1][jL] ==num){
        *i=iL+1;
        *c='B';
    }
    else  if (iL-1>=0 && vlab->lab[iL-1][jL] ==num){
            *i=iL-1;
            *c='C';
         } else  if (jL+1<vlab->col && vlab->lab[iL][jL+1] ==num){
                    *j=jL+1;
                     *c='D';
                } else  if (jL-1>=0 && vlab->lab[iL][jL-1] ==num){
                            *j=jL-1;
                            *c='E';
                        } else res=0;
    return res;
}
int caminho( struct _labirinto * vlab ){
    int numero=vlab->lab[0][0];
    int cont=1;
    int i=0,j=0;
    char car;
    while (existe(vlab,&i,&j,&car)==1){
        printf("%c",car);
        cont++;
    }
    printf("\n");
    return numero*cont;
}

int main(){
    int res=0;
    char linha[MAX];
    struct _labirinto varLab;
    fgets(linha, MAX-1,stdin);
    sscanf(linha,"%d %d", &varLab.lin,&varLab.col);
    for(int i=0;i<varLab.lin;i++)
        for(int j=0;j<varLab.col;j++)
            scanf("%d",&varLab.lab[i][j]);
    res=caminho(&varLab);  
    printf("%d\n",res);      
    /*for(int i=0;i<varLab.lin;i++){
        for(int j=0;j<varLab.col;j++)
            printf("%d ",varLab.lab[i][j]);
        printf("\n");
    }*/
    return 0;
}