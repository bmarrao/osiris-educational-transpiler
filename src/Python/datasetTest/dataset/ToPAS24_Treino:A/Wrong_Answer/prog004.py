N = input()
if int(N) >= -100 and int(N) <= 100 :
    if int(N) > 0 :
        print('positivo!')
    elif int(N) < 0 :
        print('negativo!')
    else :
        print('zero!')