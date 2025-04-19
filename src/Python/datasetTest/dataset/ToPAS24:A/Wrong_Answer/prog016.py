h, m= map(int,input().split())
h2, m2= map(int,input().split())
h3, m3= map(int,input().split())


if h3 <= h2 and h3 >= h and m3 <= m2 and m3 >= m:
        print("Encontram-se")

elif h3 == h2 or h3 == h and 3 == m2 and m3 == m:

    print("Encontram-se")

elif h3 > h2 or h3 < h and m3 > m2 or m3 < m:
        print("Desencontram-se")

else:
    print("Desencontram-se")