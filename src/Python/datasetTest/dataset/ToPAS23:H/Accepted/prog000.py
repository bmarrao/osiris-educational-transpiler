m,n = map(int,input().split())
num_str = input()

num_digitos = num_str.split(" ")
num = num_str.replace(" ", "")
num_int = int(num)
num_digitos.reverse()
x = 1
fatores = []
soma = 0;

for i in range (m):


    for j in num_digitos:
        if (int (j) != 0):
            calc = int(j) * num_int * x
        else: calc = 0
        x *= 10
        soma += calc


    num_final = str(soma)[-3*n:-n]
    soma = 0
    x = 1
    if(num_final == ""): fatores.append('0')
    else: fatores.append(num_final)
    num_digitos = num_final.split()
    if ( num_final != ""): num_int = int(num_final)
    else: num_final = 0

num_decimal = ""
for i in fatores:
    if len(i) == n*2: num_decimal = "0," + i;
    else:
        num_decimal = "0," + ((2*n-len(i))*"0") + i
    print(num_decimal)
