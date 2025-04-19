hac,mac=map(int,input().split(" "))
has,mas=map(int,input().split(" "))
hb,mb=map(int,input().split(" "))
hacm=hac*60+mac
hasm=has*60+mas
hbm=hb*60+mb
if(hbm>=hacm and hbm<=hasm):
    print("Encontram-se")
else:
    print("Desencontram-se")