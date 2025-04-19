def imprime_par(a, b):
    arr = [b for _ in range(int(a))]
    output = " ".join(arr)
    print(output)
k, t = map(int, input().split())
numeros = input().split()
letras = input().split()
for i in range(0, k+2, 2):
    imprime_par(numeros[i], numeros[i+1])
for i in range(0, t+2, 2):
    imprime_par(letras[i], letras[i+1])