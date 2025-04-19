dia, mes = [int(x) for x in input().split()]
meses = {1: 31, 2: 28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
mesees = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
natal = 359
if mes < 12 and mes != 1:
    natal = 359 - mesees[mes - 2]
    natal -= dia
    print(natal)
elif mes == 1:
    print(natal - dia)
elif mes == 12:
    if dia == 25:
        print(0)
    elif dia < 25:
        print(25 - dia)
    else:
        print(25 - dia + 365)