class Instante:
    def __init__(self, hora, minutos):
        self.hora = hora
        self.minutos = minutos
a,b = map(int, input().split())
chegada = Instante(a , b)
a,b = map(int, input().split())
saida = Instante(a , b)
a,b = map(int, input().split())
bia = Instante(a , b)
if chegada.hora < bia.hora and saida.hora > bia.hora:
    print("Encontram-se")
elif(chegada.hora == bia.hora) and (chegada.minutos <= bia.minutos):
    print("Encontram-se")
elif(saida.hora == bia.hora) and (saida.minutos >= bia.minutos):
    print("Encontram-se")
else:
    print("Desencontram-se")

