c = input().split()
s = input().split()
b = input().split()



c = int(c[0])*60+int(c[1])
s = int(s[0])*60+int(s[1])
b = int(b[0])*60+int(b[1])


if b >= c and b <= s:
    print("Encontram-se")
else:
    print("Desencontram-se")