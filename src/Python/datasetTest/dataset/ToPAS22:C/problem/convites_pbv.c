/*
  Problema "Convites para os Amigos" por Ricardo Gonçalves
  Solução por Pedro Vasconcelos
*/
#include <stdio.h>
#include <assert.h>

#define NMAX 30

int total;
int num_amigos;               // número de amigos
int pedidos[NMAX];            // pedidos por amigo
int convites[NMAX] = { 0 };   // convites por amigo

void distribuir(void) {
  for(int i=0;i<num_amigos;i++) {
    convites[i] = 0;
  }

  for(;;) {
    int k = 0;
    for(int i=0;i<num_amigos;i++) {
      if(pedidos[i]>0)
        k++;
    }

    if(k==0 || k>total)
      break;
    
    total -= k;
    for(int i=0;i<num_amigos;i++) {
      if(pedidos[i]>0) {
        pedidos[i] --;
        convites[i] ++;
      }
    }
  }
}

int main(void) {
  scanf("%d\n%d\n", &total, &num_amigos);
  assert(num_amigos>=0 && num_amigos<=NMAX);
  for(int i=0; i<num_amigos; i++) {
    scanf("%d\n", &pedidos[i]);
  }
  distribuir();
  for(int i=0;i<num_amigos; i++) {
    printf("%d\n", convites[i]);
  }
}
