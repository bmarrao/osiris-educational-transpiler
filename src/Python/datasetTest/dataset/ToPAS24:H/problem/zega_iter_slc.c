/*
 * author = "Sergio Crisostomo"
 */

#include <stdio.h>
#include <stdlib.h>

// LIMITS
#define L 100
#define C 100
#define N 100
#define MINF (-L * N)
#define MAX(A,B) (((A)>(B))?(A):(B))

int maxNectar(int CN[L][C+2], int nl, int nc) {
    for (int l = 1; l < nl; l++) {
        for (int c = 1; c <= nc; c++) {
            CN[l][c] += MAX(MAX(CN[l-1][c-1], CN[l-1][c]), CN[l-1][c+1]);
        }
    }
    int maxN = CN[nl-1][1];
    for (int c = 1; c <= nc; c++) {
        maxN = MAX(CN[nl-1][c], maxN); 
    }
    return MAX(maxN, 0);
}

int main() {
    int nl, nc;
    char buff[10];
    int CN[L][C+2];
    scanf("%d", &nl);
    scanf("%d", &nc);

    for (int l = 0; l < nl; l++) {
        CN[l][0] = CN[l][nc+1] = MINF;
        for (int c = 1; c <= nc; c++) {
					scanf("%s", buff);
					CN[l][c] = (buff[0] == 'V') ? MINF : atoi(buff);
        }
    }
    printf("%d\n", maxNectar(CN, nl, nc));
    return 0;
}



