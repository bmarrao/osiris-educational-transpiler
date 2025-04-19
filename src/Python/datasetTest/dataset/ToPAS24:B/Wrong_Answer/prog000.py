import datetime
dia, mes = map(int, input().split())
dataNatal = datetime.date(2022, 12, 25)
ano = 2022
if mes == 12 and dia > 25:
    ano-=1
dataAtual = datetime.date(ano, mes, dia)
print(str(dataNatal-dataAtual)[0:3])
