d, m = map(lambda x: int(x), input().split())

dias = 0
meses = [31,28,31,30,31,30,31,31,30,31,30,31]

for i in range(m-1):
    dias += meses[i]

dias += d

natal = 0


for i in range(11):
    natal += meses[i]

natal += 25

if (natal >= dias):
    print(natal-dias)
else:
    print(365 + natal-dias)