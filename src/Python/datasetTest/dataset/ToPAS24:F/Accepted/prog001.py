noMembros = int(input())
mensagens = []
for i in range(noMembros):
    mensagens.append(int(input()))
ordem = int(input())
steps = 0
memory = []
flag = True
state = 2
while flag:
    if ordem < 0 or ordem >= noMembros: # POLIZIA
        flag = False
        state = 1
    elif ordem in memory: # INCompetents
        flag = False
        state = -1
    elif mensagens[ordem] == ordem: # CA-CHING
        flag = False
        state = 0
    else:
        steps += 1
        memory.append(ordem)
        ordem = mensagens[ordem]
if state == 0:
    print(steps)
elif state == -1:
    print("INCOMPETENTE")
elif state == 1:
    print("POLICIA")
        