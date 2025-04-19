import datetime
dia, mes = map(int, input().split())
dataNatal = datetime.date(2022, 12, 25)
ano = 2022
if mes == 12 and dia > 25:
    ano-=1
dataAtual = datetime.date(ano, mes, dia)
out = str(dataNatal-dataAtual)
if out[0] == "0":
    print(0)
else:
    out = out[0:3]
    if " " in out:
        out = out[0:2]
    if " " in out:
        out = out[0:1]
    print(out)
