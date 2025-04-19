#include <stdio.h>

/**
 * @author Margarida Mamede
 */

#define MAX_NODES 100

typedef struct {
  int with;    // max USD with or without the root
  int wout;    // max USD without the root
} pairMem, *pair;

int child[MAX_NODES][2];

int usd[MAX_NODES];

void fillPair( pair p, int x, int y ) {
  p->with = x;
  p->wout = y;
}

int max( int x, int y ) {
  return ( x >= y ) ? x : y;
}

pairMem maxUSD( int root ) {
  pairMem p, c1, c2;
  int with, wout;
  if ( !child[root][0] )
    fillPair(&p, usd[root], 0);
  else {
    c1 = maxUSD(child[root][0]);
    c2 = maxUSD(child[root][1]);
    with = usd[root] + c1.wout + c2.wout;
    wout = c1.with + c2.with;
    fillPair(&p, max(with, wout), wout);
  }
  return p;
}

int main( ) {
  int nodes;
  scanf("%d", &nodes);       
  for ( int i = 1; i <= nodes; i++ )
    scanf("%d %d", &child[i][0], &child[i][1]);
  for ( int i = 1; i <= nodes; i++ )
    scanf("%d", &usd[i]);
  printf("%d USD\n", maxUSD(1).with);
  return 0;
}
