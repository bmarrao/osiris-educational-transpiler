n_colegas = int(input())
respostas = []
qualidade = 0
l = [int(x) for x in input().split()]
for x in l:
    if x != l[0]:
        break
else:
    qualidade += 1

for x in input().split():
    if int(x) in respostas:
        break
    else:
        respostas.append(int(x))
else:
    qualidade += 1
print(qualidade)