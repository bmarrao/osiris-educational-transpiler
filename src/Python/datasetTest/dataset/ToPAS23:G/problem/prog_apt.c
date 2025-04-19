#include <stdio.h>

#define MAXD 5
#define UNKNOWN '?'
#define NOTPOSSIBLE 0
#define NOINFO -1
#define FIXED 1


// #define DEBUG
// #define PROPAGA


void regista(int d,int nec[]);
void inicializa(int d);
void check_sol(int d, int nec[]);
void procura(int p, int d, int nec[]);

#ifdef PROPAGA
void digfixos(int d,int nec[]);
void colfixos(int d);
#endif

#ifdef DEBUG
void mostra_restrs(int d,int nec[]);
#endif


int NSols, Constr[10][MAXD];
char Sol[MAXD+1], Num[MAXD+1], Tent[MAXD+1], Feed[MAXD+1];

void inicializa(int d) {
  for(int i=0; i<d; i++) {
    Num[i] = UNKNOWN;
    for(int j=0;j<10;j++) Constr[j][i] = NOINFO;
  }
  Num[d+1] = '\0';
}


void regista(int d,int nec[]){
  int i, k, j;
  for(i=0; i<d; i++) {
    k = Tent[i]-'0';
    if (Feed[i] == 'X') {
      for (j=0; j < d; j++) 
	Constr[k][j] = NOTPOSSIBLE;
    } else {
      nec[k] = 1;  // pelo menos um k
      if (Tent[i] == Feed[i])  { // acerto
	if (Num[i] != Tent[i])    {   // novo acerto
	  Num[i] = Tent[i];
	  Constr[k][i] = FIXED;
	  for(j=0;j<10;j++) 
	    if (j != k) Constr[j][i] = NOTPOSSIBLE;
	}
      } else { // Feed[i] == '-'
	Constr[k][i] = NOTPOSSIBLE;
      }
    }
  }
}      


void procura(int p, int d, int nec[]) {
  int i;
  while (p < d && Num[p] != UNKNOWN) p++;
  if (p < d) {
    for(i = 0; i < 10 && Constr[i][p] == NOTPOSSIBLE; i++);
    for (; i < 10 && NSols <= 1; i++) {
      if (Constr[i][p] != NOTPOSSIBLE) {
	Num[p] = i+'0';
	procura(p+1,d,nec);
	Num[p] = UNKNOWN;
      }
    }
  } else {  // verifica se tem solucao
    check_sol(d,nec);
  }
}

void check_sol(int d, int nec[]) {
  int i, j;
  for(i=0;i<10;i++) {
    if (nec[i] == 1) {
      for(j=0;j<d; j++)
	if (Num[j] == i+'0') break;
      if (j == d) return;  // sem valor para Num[j]
    }
  }
  NSols++;  
  for(i=0;i<=d;i++)  Sol[i] = Num[i];
}

int main() {
  int c, d, t, nec[10]={0};

  scanf("%d%d",&d,&t);

  inicializa(d);

  while (t-- > 0) {
    scanf("%s",Tent);
    scanf("%s",Feed);
    regista(d,nec);
  }

#ifdef DEBUG
  mostra_restrs(d,nec);
  printf("\n\n");
#endif

  //--- melhora pesquisa
#ifdef PROPAGA
  digfixos(d,nec);
  colfixos(d);
#endif
   

#ifdef DEBUG
  mostra_restrs(d,nec);
  printf("\n\n");
#endif


  //-- pesquisa sols
  NSols = 0; 
  c = 0;
  for(int i=0; i < d; i++)
    if (Num[i] != UNKNOWN) c++;
  

  if (d == c) printf("RESPOSTA %s\n",Num);
  else {
    procura(0,d,nec);
    if (NSols > 1) printf("AINDA NAO SEI\n");
    else printf("RESPOSTA %s\n",Sol);
  }

  return  0;
}


#ifdef PROPAGA
void colfixos(int d) {
  int c, i, j, p;
  for(j=0; j<d; j++)
    if (Num[j] == UNKNOWN) {
      for(i=0,c=0; i<10 && c < 2; i++)
	if (Constr[i][j] == NOINFO) {
	  c++;
	  p = i;
	}
      if (c == 1)  {
	Num[j] = p + '0';
	Constr[p][j] = FIXED;
      }
    }
}

void digfixos(int d,int nec[]) {
  int j, i, c, known, p, altera;
  do {
    altera = known = 0;
    for(i=0;i<10;i++)
      if (nec[i] == 1) {
	for(j=0, c=0; j < d; j++) 
	  if (Constr[i][j] == FIXED) {
	    known++;
	    break;
	  } else if (Constr[i][j] == NOINFO) {p=j; c++;}
	if (j==d && c == 1) {
	  Num[p] = i+'0';
	  for(int k=0;k<10;k++)
	    Constr[k][p] = NOTPOSSIBLE;
	  Constr[i][p] = FIXED;
	  known++;
	  altera = 1;
	  break;
	}
      }
  } while (altera == 1 && known < d);
}
#endif

#ifdef DEBUG
void mostra_restrs(int d,int nec[]) {
  for(int i=0;i<10;i++) {
    for(int j=0;j<d;j++)
      printf(" %d", Constr[i][j]);
    printf("\t %d\n",nec[i]);
    putchar('\n');
  }
}
#endif

