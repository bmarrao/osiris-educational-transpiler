N = input()
if int(N) <= 100 and int(N) > 0 :
    print(N + ' positivo!')
elif int(N) >= -100 and int(N) < 0 :
    print(N + ' negativo!')
elif int(N) == 0 :
    print(N + ' zero!')