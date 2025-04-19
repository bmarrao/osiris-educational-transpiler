mapa = {}

mapa["0"] = {
    "capacidade": 1000000000000000000,
    "atual": 1000000000000000000
}
valor = int(input())
i = 1
while (valor != 0):
    print("UMA VEZ")
    mapa[str(i)] = {
        "capacidade": valor,
        "atual": 0
    }
    i += 1
    valor = int(input())

objetivo = int(input())

operacoes = []

N = len(mapa) - 1
F, D = map(lambda x: int(x), input().split())

while (F != 0 and D != 0):

    ainda_falta = mapa[str(D)]["capacidade"] - mapa[str(D)]["atual"]
    a_remover = mapa[str(F)]["capacidade"]
    if (ainda_falta > mapa[str(F)]["atual"]):
        a_remover = ainda_falta - mapa[str(F)]["atual"]

    mapa[str(D)]["atual"] += a_remover
    mapa[str(F)]["atual"] -= a_remover

    # fim
    F, D = map(lambda x: int(x), input().split())

resultado = "ERRADO"
for chave in mapa:
    print(mapa[chave])
    if (chave != 0 and mapa[chave]["atual"]):
        resultado = "CERTO"

print(resultado)