



def dias_natal():
    dia, mes = map(int, input().split())
    meses_dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if dia == 0 or mes == 0 or mes > 12 or (mes == 2 and dia > 28):
        return
    dias_sum = 0
    start = True

    if mes == 12:
        if dia > 25:
            return (364 - dia) + 26
        return 25 - dia

    for m,dias in enumerate(meses_dias[mes - 1:]):
        if start:
            dias_sum += dias - dia
            start = False
            continue
        if m+mes == 12:
            dias_sum += 25
            continue
        dias_sum += dias
    return dias_sum
result = dias_natal()
if result is not None:
    print(result)