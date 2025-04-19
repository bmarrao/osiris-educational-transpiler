x, y = map(int, input().split())
a, b = map(int, input().split())
c, d = map(int, input().split())

if (c>x and c<a):
    print("Encontram-se")
elif (c==x):
    if (d>=y):
        print("Encontram-se")
    else:
        print("Desencontram-se")
elif (c == a):
        if (d <= b):
            print("Encontram-se")
        else:
            print("Desencontram-se")
else:
    print("Desencontram-se")