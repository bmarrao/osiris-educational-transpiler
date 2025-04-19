mapa = {}

valor = int(input())
i = 1
while (valor != 0):
    mapa[str(i)] = {
        "capacidade": valor,
        "atual": 0
    }
    i += 1
    valor = int(input())

objetivo = int(input())

N = len(mapa) - 1
F, D = map(lambda x: int(x), input().split())

while (F != 0 or D != 0):
    if (D == 0 and F == 0):
        break

    if (D == 0):
        mapa[str(F)]["atual"] = 0
    elif (F == 0):
        mapa[str(D)]["atual"] = mapa[str(D)]["capacidade"]
    else:
        ainda_falta = 0
        if mapa[str(F)]["atual"] > mapa[str(D)]["capacidade"]:
            a_remover = mapa[str(D)]["atual"]
        else:
            a_remover = mapa[str(F)]["capacidade"]

            mapa[str(D)]["atual"] += a_remover
            mapa[str(F)]["atual"] -= a_remover

            if (mapa[str(D)]["atual"] > mapa[str(D)]["capacidade"]):
                a_remover = -(mapa[str(D)]["atual"] - mapa[str(D)]["capacidade"])

        mapa[str(D)]["atual"] += a_remover
        mapa[str(F)]["atual"] -= a_remover

    # fim
    F, D = map(lambda x: int(x), input().split())

resultado = "ERRADO"
for chave in mapa:
    if (mapa[chave]["atual"] == objetivo):
        resultado = "CERTO"

print(resultado)