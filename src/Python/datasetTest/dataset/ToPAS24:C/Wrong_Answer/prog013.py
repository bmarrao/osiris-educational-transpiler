n_colegas = int(input())
respostas = []
qualidade = 0
l = [int(x) for x in input().split()]
if sum(l) == n_colegas * l[0]:
    qualidade += 1
for x in input().split():
    if x in respostas:
        break
    else:
        respostas.append(x)
else:
    qualidade += 1
print(qualidade)