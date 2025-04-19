def imprime_par(a, b):
    arr = [b for _ in range(int(a))]
    output = " ".join(arr)
    print(output)
k, t = map(int, input().split())
numeros = input().split()
letras = input().split()
for i in range(k * 2):
    if i % 2 == 0:
        imprime_par(numeros[i], numeros[i+1])
for j in range(t * 2):
    if j % 2 == 0:
        imprime_par(letras[j], letras[j+1])