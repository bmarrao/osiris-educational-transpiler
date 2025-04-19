h1,m1=input().split()
h2,m2=input().split()
h3,m3=input().split()
h1=int(h1)
h2=int(h2)
h3=int(h3)
m1=int(m1)
m2=int(m2)
m3=int(m3)
if (h1<0 or h1>23) or (h2<0 or h2>23) or (h3<0 or h3>23) or (m1<0 or m1>59) or (m2<0 or m2>59) or (m3<0 or m3>59):
    exit()
if h3==h2:
    if m3<=m2:
        print("Encontram-se")
    else:
        print("Desencontram-se")
elif h3==h1:
    if m3>=m1:
        print("Encontram-se")
    else:
        print("Desencontram-se")
elif h3<h1 or h3>h2:
    print("Desencontram-se")
elif (h3>h1 and h3<h2):
    print("Encontram-se")




















