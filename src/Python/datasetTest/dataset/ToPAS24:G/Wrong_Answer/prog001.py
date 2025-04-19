n = int (input())
sup = []
fel = []
for i in range (n):
    sup.append([])
    for j in range(n):
        sup[i].append(0)

chefias = []

for i in range (n):
    n1, n2 = map(int,input().split())
    chefias.append((n1, n2))
    for j in range(n):
        if n1 != 0 and n2 != 0:
            sup[i][n1-1] = 1
            sup[i][n2-1] = 1

bossFel = 0
for i in range (n):
    fel.append(int(input()))
    if i == 0:
        bossFel = fel[i]
sup2 = []
for i in range (n):
    sup2.append([])
    for j in range(n):
        sup2[i].append(sup[i][j])

for j in range(n):
    for i in range(n):
        if sup2[i][j] == 1:
            sup2[i][j] = fel[j]

for i in range (n):
    if sup2[0][i] == 1:
        fel[i] = 0

for i in range(n-1, -1, -1):
    if sum(sup2[i]) > fel[i]:
        fel[i] = 0
fel[0]=bossFel
print(f"{sum(fel)} USD")