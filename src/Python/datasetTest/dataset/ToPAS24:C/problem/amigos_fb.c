#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXLINE 50
#define MAX 21

int allDiff(int nF) {
   int number;
    int i;
   int freq[MAX];
    for (i=0;i<MAX;i++)
        freq[i]=0;
    for (i=0;i<nF;i++){
        fscanf(stdin,"%d", &number);
		freq[number]++;
	}
	i=1;
	while (i<MAX && freq[i]<=1)
		i++;
	if ( i==MAX)
        return 1;
    return 0;
}

int allEqual(int nF) {
    int x, number,count=1;
    fscanf(stdin,"%d", &x);
    int i=1;
	while (i<nF){
        fscanf(stdin,"%d", &number);
        if (number==x)
            count++;
		i++;
    }
	if (count==nF)
        return 1;
    return 0;
}

int main(){
    int nF;
    fscanf(stdin,"%d", &nF);
    printf("%d\n",allEqual(nF)+ allDiff(nF));
    return 0;
}
