// apt
#include <stdio.h>

#define M 6
#define N 7

void lerdados(char tabuleiro[][N]) {
  for(int i=M-1; i >= 0; i--) {
    for(int j=0; j<N; j++)
      tabuleiro[i][j] = getchar();
    getchar();
  }
}

int coluna(char t[][N],int i0,int j){
  int c, i;
  if (i0 < 3) return 0;
  c = 1;
  for (i=i0-1; i >= 0 && t[i][j] == t[i0][j]; i--, c++);
  return c >= 4;
}

int linha(char t[][N],int i,int j0){
  int c = 1, j;
  for (j=j0-1; j >= 0 && t[i][j] == t[i][j0]; j--, c++);
  for (j=j0+1; j < N && t[i][j] == t[i][j0]; j++, c++);
  return c >= 4;
}

int diagonal(char t[][N],int i0,int j0){
  int c = 1, j, i;
  for (j=j0-1, i=i0-1; j >= 0 && i >= 0 && t[i][j] == t[i0][j0]; j--, i--, c++);
  for (j=j0+1, i=i0+1; j < N  && i < M && t[i][j] == t[i0][j0]; j++, i++, c++);
  return c >= 4;
}

int diagonalneg(char t[][N],int i0,int j0){
  int c = 1, j, i;
  for (j=j0-1, i=i0+1; j >= 0 && i < M  && t[i][j] == t[i0][j0]; j--, i++, c++);
  for (j=j0+1, i=i0-1; j < N  && i >= 0 && t[i][j] == t[i0][j0]; j++, i--, c++);
  return c >= 4;
}


int main() {
  char t[M][N], venceu;
  int i, j; 

  lerdados(t);
  
  venceu = '.';
  for (j=0; j < N && venceu == '.'; j++)  {
    for(i=M-1; i >= 0 && t[i][j] == '.'; i--) ;
    if (i >= 0 && (coluna(t,i,j) || linha(t,i,j) || diagonal(t,i,j) || diagonalneg(t,i,j)))
      venceu = t[i][j];
  }

  if (venceu != '.') printf("GANHOU %c\n",venceu);
  else {
    for(j =0; j < N && t[M-1][j] != '.'; j++);
    if (j==N) printf("EMPATE\n");
    else printf("JOGANDO\n");
  }

  return 0;
}
      
