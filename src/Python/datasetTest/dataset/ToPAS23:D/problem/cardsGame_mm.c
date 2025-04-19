#include <stdio.h>
#include <string.h>

/**
 * @author Margarida Mamede
 */

#define HAND_SIZE 5

#define MAX_CARD 10


int SCORES[5] = {0, 1, 3, 5, 10};

int hand[MAX_CARD + 1];

int maxScore = 0;

int nWinners = 0;


int getScore( ) {
    int score = 0;
    for ( int i = 1; i <= MAX_CARD; i++ )
        score += i * SCORES[ hand[i] ];
    return score;
}

void updateStats( int score ) {
    if ( score > maxScore ) {
        maxScore = score;
        nWinners = 1;
    }
    else if ( score == maxScore )
        nWinners++;
}

int main( ) {
    int nPlayers, value, score;
    scanf("%d", &nPlayers);       
    for ( int i = 0; i < nPlayers; i++ ) {
        memset(hand, 0, sizeof(hand));
        for ( int j = 0; j < HAND_SIZE; j++ ) {
            scanf("%d", &value);
            hand[value]++;
        }
        score = getScore();
        updateStats(score);
    }
    printf("%d %d\n", nWinners, maxScore);
    return 0;
}
