jarros = []
temp = []
while True:
    jarro = int(input())
    if jarro == 0:
        break
    jarros.append(jarro)
    temp.append(0)
capAAtingir = int(input())
while True:
    entr = list(map(int, input().split()))
    if entr[0] == entr[1] == 0:
        break

    if entr[0] == 0: # ENCHE
        temp[entr[1]-1] = jarros[entr[1]-1]
    elif entr[1] == 0: # ESVAZIA
        temp[entr[0]-1] = 0
    else:
        while temp[entr[1]-1] != jarros[entr[1]-1] and temp[entr[0]-1] != 0:
            temp[entr[0]-1]-=1
            temp[entr[1]-1]+=1
if capAAtingir in temp:
    print("CERTO")
else:
    print("ERRADO")



