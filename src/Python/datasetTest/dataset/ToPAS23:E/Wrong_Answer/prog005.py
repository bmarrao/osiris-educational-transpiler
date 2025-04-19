totais = 0

av=0
gr=0
ig=0
jar=0
ma=0
mf=0
pf=0
sc=0
sl=0
sj=0
sp=0
se=0
sen=0
serra=0
tor=0
vi=0

nomes=["ARCO DE VILA", "GRACA", "IGREJA DOS GRILOS", "JARDINS DO PALACIO DE CRISTAL", "MONTE AGUDO", "MONTE DE FARO", "PENHA DE FRANCA", "SANTA CATARINA", "SANTA LUZIA", "SAO JORGE", "SAO PEDRO DE ALCANTARA", "SE CATEDRAL", "SENHORA DO MONTE", "SERRA DO PILAR", "TORRE DOS CLERIGOS", "VITORIA"]

while 1==1:
    text = input()
    if text == "FIM":
        break
    if text == nomes[0]:
        av +=1
    if text == nomes[1]:
        gr +=1
    if text == nomes[2]:
        ig +=1
    if text == nomes[3]:
        jar +=1
    if text == nomes[4]:
        ma += 1
    if text == nomes[5]:
        mf += 1
    if text == nomes[6]:
        pf += 1
    if text == nomes[7]:
        sc += 1
    if text == nomes[8]:
        sl += 1
    if text == nomes[9]:
        sj += 1
    if text == nomes[10]:
        sp += 1
    if text == nomes[11]:
        se += 1
    if text == nomes[12]:
        sen += 1
    if text == nomes[13]:
        serra += 1
    if text == nomes[14]:
        tor += 1
    if text == nomes[15]:
        vi += 1
    totais += 1

maxi=0
if av>maxi:
    maxi = av
if gr>maxi:
    maxi = gr
if ig>maxi:
    maxi = ig
if jar>maxi:
    maxi = jar
if ma>maxi:
    maxi = ma
if mf>maxi:
    maxi = mf
if pf>maxi:
    maxi = pf
if sc>maxi:
    maxi = sc
if sl>maxi:
    maxi = sl
if sj>maxi:
    maxi = sj
if sp>maxi:
    maxi = sp
if se>maxi:
    maxi = se
if sen>maxi:
    maxi = sen
if serra>maxi:
    maxi = serra
if tor>maxi:
    maxi = tor
if vi>maxi:
    maxi = vi

print(totais, " ", maxi)

if av==maxi:
    print(nomes[0], " Faro")
if gr==maxi:
    print(nomes[1], " Lisboa")
if ig==maxi:
    print(nomes[2], " Porto")
if jar==maxi:
    print(nomes[3], " Porto")
if ma==maxi:
    print(nomes[4], " Lisboa")
if mf==maxi:
    print(nomes[5], " Faro")
if pf==maxi:
    print(nomes[6], " Lisboa")
if sc==maxi:
    print(nomes[7], " Lisboa")
if sl==maxi:
    print(nomes[8], " Lisboa")
if sj==maxi:
    print(nomes[9], " Lisboa")
if sp==maxi:
    print(nomes[10], " Lisboa")
if se==maxi:
    print(nomes[11], " Porto")
if sen==maxi:
    print(nomes[12], " Lisboa")
if serra==maxi:
    print(nomes[13], " Porto")
if tor==maxi:
    print(nomes[14], " Porto")
if vi==maxi:
    print(nomes[15], " Porto")
