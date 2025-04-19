entrada, minutoentrada = map(lambda x: int(x), input().split())
saida, minutosaida = map(lambda x: int(x), input().split())
encontro, minutoencontro = map(lambda x: int(x), input().split())

valorentrada = 60 * entrada + minutoentrada
valorsaida = 60 * saida + minutosaida
valorencontro = 60 * encontro + minutoencontro

if (valorencontro >= valorentrada and valorencontro <= valorsaida):
    print("Encontram-se")
else:
    print("Desencontram-se")