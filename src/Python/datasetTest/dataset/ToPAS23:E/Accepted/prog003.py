lista= []
l=[]
vezes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
nomes=["ARCO DA VILA","GRACA","IGREJA DOS GRILOS","JARDINS DO PALACIO DE CRISTAL","MONTE AGUDO","MONTE DE FARO","PENHA DE FRANCA","SANTA CATARINA","SANTA LUZIA","SAO JORGE","SAO PEDRO DE ALCANTARA","SE CATEDRAL","SENHORA DO MONTE","SERRA DO PILAR","TORRE DOS CLERIGOS","VITORIA"]
nomes2=["ARCO DA VILA Faro","GRACA Lisboa","IGREJA DOS GRILOS Porto","JARDINS DO PALACIO DE CRISTAL Porto","MONTE AGUDO Lisboa","MONTE DE FARO Faro","PENHA DE FRANCA Lisboa","SANTA CATARINA Lisboa","SANTA LUZIA Lisboa","SAO JORGE Lisboa","SAO PEDRO DE ALCANTARA Lisboa","SE CATEDRAL Porto","SENHORA DO MONTE Lisboa","SERRA DO PILAR Porto","TORRE DOS CLERIGOS Porto","VITORIA Porto"]
f=input()
if f!="FIM":
    lista.append(f)
while f!="FIM":
    f=input()
    if f!="FIM":
        lista.append(f)
for t in range(len(lista)):
    if lista[t]=="ARCO DA VILA":
        vezes[0]=vezes[0]+1
    if lista[t]=="GRACA":
        vezes[1]=vezes[1]+1
    if lista[t]=="IGREJA DOS GRILOS":
        vezes[2]=vezes[2]+1
    if lista[t]=="JARDINS DO PALACIO DE CRISTAL":
        vezes[3]=vezes[3]+1
    if lista[t]=="MONTE AGUDO":
        vezes[4]=vezes[4]+1
    if lista[t]=="MONTE DE FARO":
        vezes[5]=vezes[5]+1
    if lista[t]=="PENHA DE FRANCA":
        vezes[6]=vezes[6]+1
    if lista[t]=="SANTA CATARINA":
        vezes[7]=vezes[7]+1
    if lista[t]=="SANTA LUZIA":
        vezes[8]=vezes[8]+1
    if lista[t]=="SAO JORGE":
        vezes[9]=vezes[9]+1
    if lista[t]=="SAO PEDRO DE ALCANTARA":
        vezes[10]=vezes[10]+1
    if lista[t]=="SE CATEDRAL":
        vezes[11]=vezes[11]+1
    if lista[t]=="SENHORA DO MONTE":
        vezes[12]=vezes[12]+1
    if lista[t]=="SERRA DO PILAR":
        vezes[13]=vezes[13]+1
    if lista[t]=="TORRE DOS CLERIGOS":
        vezes[14]=vezes[14]+1
    if lista[t]=="VITORIA":
        vezes[15]=vezes[15]+1
l=sorted(vezes)
maior=l[len(l)-1]
print(len(lista),maior)
for r in range(len(vezes)):
    if vezes[r]==maior:
        print(nomes2[r])
