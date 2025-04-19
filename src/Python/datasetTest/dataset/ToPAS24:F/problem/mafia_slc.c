/*
 * author = "Sergio Crisostomo"
*/

#include <stdio.h>

#define MAX 1000

void ordem(int familia[], int m, int k){
	int processada[MAX] = {0};
	int conta = 0;

	while(k >= 0 && k < m && familia[k] != k && !processada[k]){
		processada[k] = 1;
		conta++;
		k = familia[k];
	}
	if (k < 0 || k >= m) printf("POLICIA\n");
	else if (familia[k] == k) printf("%d\n", conta);
	else printf("INCOMPETENTE\n");
	return;
}

int main() {
	int m, k;
	int familia[MAX];
	
	scanf("%d", &m);
	for(int i = 0; i < m; i++){
		scanf("%d", &familia[i]);
	}
	scanf("%d", &k);
	ordem(familia, m, k);
	return 0;
}


