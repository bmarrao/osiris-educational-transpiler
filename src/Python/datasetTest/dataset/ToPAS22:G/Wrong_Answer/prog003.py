n = input()
vetor = []
for i in n:

    vetor.append(int(i))


x = 1
soma = 0
for i in vetor:
    i = int(i)
    if(x % 2 == 0) :
        soma += i *3
    else:
        soma += i

    x+=1

soma = soma - int(vetor[12])

resto = soma % 10


resto = 10 - resto
if resto == 10:
    if(0 == int(vetor[12])):

        print("OK")
    else:
        print("ERRO",resto)
else:
    if(resto == int(vetor[12])):

        print("OK")
    else:
        print("ERRO",resto)