h1,m1=input().split()
h2,m2=input().split()
h3,m3=input().split()

if int(h1)<0 or int(h1)>23 or int(h2)<0 or int(h2)>23 or int(h3)<0 or int(h3)>23 or int(m1)<0 or int(m1)>59 or int(m2)<0 or int(m2)>59 or int(m3)<0 or int(m3)>59:
    exit()

if (h3<=h2 and h3>=h1) and (m3<=m2 and m3>=m1):
    print("Encontram-se")
else:
    print("Desencontram-se")




















