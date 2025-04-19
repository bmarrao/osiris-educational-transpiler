input()

v1 = int(input().replace(" ", ""))
v2 = int(input().replace(" ", ""))

vf = input().replace(" ", "")

vr = str(v1 + v2)

vr = vr[::-1]
vfi = vf[::-1]

s = 0

for x in range(len(vr)):
    if (len(vfi) >= x):
        if int(vr[x]) - int(vfi[x]) != 0:
            s += 1
            vf = str(int(vf) + 10**x)
            vfi = vf[::-1]

print(s)

