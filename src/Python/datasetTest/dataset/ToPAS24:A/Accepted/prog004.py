hora_inicial, minuto_inicial = [int(x) for x in input().split()]
hora_final, minuto_final = [int(x) for x in input().split()]
hora_instante, minuto_instante = [int(x) for x in input().split()]
if hora_inicial <= hora_instante <= hora_final:
    if hora_instante == hora_final:
        if minuto_instante > minuto_final:
            print("Desencontram-se")
        else:
            print("Encontram-se")
    elif hora_instante == hora_inicial:
        if minuto_instante < minuto_inicial:
            print("Desencontram-se")
        else:
            print("Encontram-se")
    else:
        print("Encontram-se")
else:
    print("Desencontram-se")