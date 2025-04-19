x, y, z = map(int, input().split())
n = max([x,y,z])
n1 = input()
n2 = input()
r = input()
resposta_certa = (int("".join(n1.split())) + int("".join(n2.split()))) == int("".join(r.split()))
if resposta_certa:
    print("0")
else:
    l1 = n1.split()
    l2 = n2.split()
    l3 = r.split()
    out = 0
    for i in range (n, 0, -1):
        index = i - 1
        if index >= x:
            a = 0
        else:
            a = l1[i-1]
        if index >= y:
            b = 0
        else:
            b = l2[i-1]
        if index >= z:
            c = 0
        else:
            c = l3[i-1]
        soma = (int(a) + int(b))
        if soma < 10:
            continue
        d = list(str(soma))
        if d[1] == int(c):
            continue
        else:
            out += 1
    print(out)