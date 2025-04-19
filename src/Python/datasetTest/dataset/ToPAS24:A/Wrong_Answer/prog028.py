h, m= map(int,input().split())
h2, m2= map(int,input().split())
h3, m3= map(int,input().split())

soma= h2 and m2 | h and m

if h3 > h2 and m3 > m:
    print ("Desencontram-se")
elif h3 == h and m3 >= m:
    print ("Encontram-se")
elif h3 == h2 and m3 <= m2:
    print ("Encontram-se")
elif h3 >= h and m3 >= m:
    print ("Encontram-se")
elif h3 >= h2 and m3 <= m2:
    print ("Encontram-se")

else:
    print ("Desencontram-se")