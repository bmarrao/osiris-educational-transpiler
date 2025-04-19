noMembros = int (input())
mensagens = []
for i in range(noMembros):
    mensagens.append(int(input()))
ordem = int(input())
steps = 0
memory = []
flag = True
state = 2
while flag:
    if mensagens[ordem] == ordem: # CA-CHING
        flag = False
        state = 0
    elif ordem in memory: # INCompetents
        flag = False
        state = -1
    elif ordem < 0 or ordem >= noMembros: # POLIZIA
        flag = False
        state = 1
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
        