h1, m1 = map(lambda x: int(x), input().split())
h2, m2 = map(lambda x: int(x), input().split())
h3, m3 = map(lambda x: int(x), input().split())


if (h3 > h1 and h3 < h2):
    print("Encontram-se")
elif (h3 == h1 ):
    if (m3 >= m1):
        print("Encontram-se")
    else:
        print("Desencontram-se")
elif (h2 == h1):
    if (m3 > m2):
        print("Desencontram-se")
    else:
        print("Encontram-se")
else:
        print("Desencontram-se")

