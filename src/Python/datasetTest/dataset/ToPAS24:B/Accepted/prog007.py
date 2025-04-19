D, M= map(int,input().split())

for i in range(364):
    mes= 359
    if M == 1:
        soma2= mes - D
    elif M == 2:
        mes= 359
        soma= 31 + D
        soma2= mes - soma
    elif M == 3:
        mes= 359
        soma = 31+ 28 + D
        soma2= mes - soma
    elif M == 4:
        mes= 359
        soma = 31+28+31 + D
        soma2= mes - soma
    elif M== 5:
        mes= 359
        soma= 31+28+31+30+ D
        soma2= mes - soma
    elif M== 6:
        mes= 359
        soma= 31+28+31+30+ 31 + D
        soma2= mes - soma
    elif M== 7:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + D
        soma2= mes - soma
    elif M== 8:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + 31 + D
        soma2= mes - soma
    elif M== 9:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + 31 + 31 + D
        soma2= mes - soma
    elif M== 10:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + 31 + 31 + 30 + D 
        soma2= mes - soma
    elif M== 11:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + 31 + 31 + 30 + 31 + D
        soma2= mes - soma
    elif M == 12:
        mes= 359
        soma= 31+28+31+30+ 31 + 30 + 31 + 31 + 30 + 31 + 30 + D
        soma2= mes - soma
        if D > 25:
            soma= 364
            soma2= soma - (D - 26) 
print(soma2)