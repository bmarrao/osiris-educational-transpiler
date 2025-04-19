
h1, m1 = map(int,input().split())
h2, m2 = map(int,input().split())

h3, m3 = map(int,input().split())

if h1 < h3 < h2 or h3==h1 and m3>m1 or h3==h2 and m3<m2:
    print("Encontram-se")
elif h2 == h3:
    if m2 >= m3 >= m1:
        print("Encontram-se")
    else:
        print("Desencontram-se")
else:
    print("Desencontram-se")





