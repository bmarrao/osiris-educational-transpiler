M = int(input())
N = int(input())

dias = []

acima = 0
for i in range(0, N):
    dia = int(input())
    dias.append(dia)

for dia in dias:
    if dia > M + 5:
        acima = acima + 1
        if acima > 5:
            break
    else:
        if acima > 0:
            acima = 0

if acima > 5:
    print("WAVE")
else:
    print("FLAT")