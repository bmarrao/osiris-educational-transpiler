x, y = map(int, input().split())
a, b = map(int, input().split())
c, d = map(int, input().split())

if (c>x and c<a):
        print("Encontram-se")
elif (c==x):
    if (c==a):
        if (d>=y and d<b)or (d>y and d<=b) or (d>=y and d<=b):
            print("Encontram-se")
        else:
            print("Desencontram-se")
    else:
        if (d>=y):
            print("Encontram-se")
        else:
            print("Desencontram-se")
elif (c==a):
    if (c == x):
            if (d <= b and d>y)or (d<b and d>=y) or (d<=b and d>=y):
                print("Encontram-se")
            else:
                print("Desencontram-se")
    else:
        if (d <= b):
            print("Encontram-se")
        else:
            print("Desencontram-se")
else:
        print("Desencontram-se")
