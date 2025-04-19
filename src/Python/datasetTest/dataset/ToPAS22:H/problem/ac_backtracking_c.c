// Atencao a Tensao
// ToPAS 2022
// Autor: Vasco Cruz


#include <stdio.h>
#include "string.h"


int factorial(int x) {
	int res = 1;
	for (int i = 1; i <= x; i++) res *= i;
	return res;
}


int popcount(int x) {
	int res = 0;
	while (x) {
		if (x&1) res++;
		x >>= 1;
	}
	return res;
}


#define MAXN 12
#define MAXNAME_LEN 21 // +1 extra para '\0' caber no array

int N, M;                       // numero de vertices, numero de arestas
int total;                      // resposta
int sao_rivais[MAXN][MAXN];     // matriz de adjacencia do grafo complementar
char nomes[MAXN][MAXNAME_LEN];  // nomes dos representantes

int estes[MAXN/2];              // as N/2 pessoas escolhidas
int outros[MAXN/2];             // as N/2 pessoas restantes
int perm_outros[MAXN/2];        // permutacao das N/2 pessoas restantes que estamos a gerar atualmente
int usado[MAXN];                // que elementos ja foram usados na permutacao perm_outros

int size_estes = 0;
int size_outros = 0;
int size_perm_outros = 0;


void backtrack_permutacoes(int i) {
	if (i==N/2) { // permutacao perm_outros completa e valida
		total++;
		return;
	}
	for (int j = 0; j < N/2; j++) {
		int atual = estes[i];   // pessoa sentada na parte de cima da mesa
		int oposto = outros[j]; // pessoa sentada na parte de baixo da mesa (que vamos escolher agora) que fica frente a frente a ela
		if (!usado[oposto] && !sao_rivais[atual][oposto]) { // apenas continuar a gerar se nao forem rivais
			usado[oposto] = 1;
			perm_outros[size_perm_outros++] = oposto;
			backtrack_permutacoes(i+1);
			usado[oposto] = 0;
			size_perm_outros--;
		}
	}
}


int main() {
	int R; scanf("%d", &R);
	while (R--) {
		scanf("%d %d", &N, &M);
		for (int i = 0; i < N; i++) for (int j = 0; j < N; j++) sao_rivais[i][j] = 0;
		for (int i = 0; i < N; i++) scanf("%s", nomes[i]);
		for (int i = 0; i < M; i++) {
			char a[MAXNAME_LEN], b[MAXNAME_LEN];
			scanf("%s %s", a, b);
			int id_a = -1, id_b = -1;
			for (int j = 0; j < N; j++) if (strcmp(nomes[j], a) == 0) { id_a = j; break; }
			for (int j = 0; j < N; j++) if (strcmp(nomes[j], b) == 0) { id_b = j; break; }
			sao_rivais[id_a][id_b] = sao_rivais[id_b][id_a] = 1;
		}
		total = 0;
		for (int mask = 0; mask < 1<<N; mask++) { // escolher as N/2 pessoas que ficam numa metade da mesa
			if (popcount(mask) != N/2) continue;
			size_estes = size_outros = 0;
			for (int i = 0; i < N; i++) { // dividir as pessoas escolhidas pelas duas metades da mesa
				if (mask>>i&1) estes[size_estes++] = i;
				else outros[size_outros++] = i;
			}
			backtrack_permutacoes(0); // escolher a permutacao das N/2 pessoas restantes
		}
		total *= factorial(N/2); // multiplicar a resposta por (N/2)! para contar todas as permutacoes das N/2 pessoas fixadas
		if (total>0) printf("Possivel: %d\n", total);
		else printf("Impossivel\n");
	}
}
