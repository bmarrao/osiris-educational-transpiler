noMembros = int (input())
mensagens = []
for i in range(noMembros):
    mensagens.append(int(input()))
ordem = int(input())
steps = 0
memory = []
while True:
    if mensagens[ordem] == ordem:
        print(steps)
        break
    elif ordem in memory:
        print("INCOMPETENTE")
        break
    elif not (0<=ordem<noMembros):
        print("POLICIA")
        break
    else:
        steps += 1
        memory.append(ordem)
        ordem = mensagens[ordem]
        