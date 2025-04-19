// apt

#include <stdio.h>

#define MAXN 1000


void lerVec(int v[],int n) {
  for (int i=0; i < n; i++)
    scanf("%d",&v[i]);
}

int errosSoma(int x[],int y[],int z[], int nx, int ny, int nz) {
  int c = 0, erros = 0, k = 1, r;
  
  while (k <= ny) {
    r = c + x[nx-k] + y[ny-k];
    if (r % 10 != z[nz-k]) {
      erros += 1;
      c = (x[nx-k] + y[ny-k]) / 10;
    } else {
      c = r / 10;
    }
    k += 1;
  }
  
  while (k <= nx) {
    r = c + x[nx-k];
    if (r % 10 != z[nz-k]) {
      erros += 1;
      c = 0;
    }
    else c = r / 10;
    k += 1;
  }

  if (c == 1 && k > nz) erros += 1;

  return erros;
}

int main() {
  int nx, ny, nz, res;
  int x[MAXN], y[MAXN], z[MAXN+1];

  scanf("%d%d%d",&nx,&ny,&nz);

  lerVec(x,nx);
  lerVec(y,ny);
  lerVec(z,nz);

  if (ny < nx)
    res = errosSoma(x,y,z,nx,ny,nz);
  else
    res = errosSoma(y,x,z,ny,nx,nz);

  printf("%d\n",res);

  return 0;
}





