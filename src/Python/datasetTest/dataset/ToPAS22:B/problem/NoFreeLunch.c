#include <stdlib.h>
#include <stdio.h>

/*
    A C solution for the No Free Lunch problem from ToPAS 2022
*/
void main(char** args) {
	int f, n, c, e, m=0;
	
	scanf("%d",&f);
	scanf("%d",&n);
	
	for(c = 0; c < n; c++) {
		scanf("%d", &e);
				
		if(e <= f && e > m)
					m = e;
	}

	if( m == 0)
		printf("No free lunch\n");
	else
		printf("%d\n",m);
	
	exit(0);
}