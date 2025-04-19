numPlayers = int(input())

l1 = input().split()
l2 = input().split()

firstL = 1
secL = 0

for x in range(numPlayers):
    for w in range(numPlayers):
        if l1[x] != l1[w]:
            firstL = 0
            break

for x in range(numPlayers):
    for w in range(numPlayers):
        if l2[x] == l2[w]:
            secL = 1
            break

print(firstL + secL)
