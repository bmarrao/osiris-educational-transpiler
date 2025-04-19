k, t = map(lambda x
           : int(x), input().split())

parte1 = input().split()
parte2 = input().split()

for x in range(k):
    x = x + 1
    texto = ""
    for x2 in range(int(parte1[2 * (x-1)])):
        texto += parte1[2 * x - 1] + " "
    texto = texto[:-1]
    print(texto)

for x in range(t):
    x = x + 1
    texto = ""
    for x2 in range(int(parte2[2 * (x - 1)])):
        texto += parte2[2 * x - 1] + " "
    texto = texto[:-1]
    print(texto)