x,y,z = map(int, input().split())
n1 = input()
n2 = input()
n3 = input()
n1 = n1.replace(" ", "")
n1 = int(n1)
n2 = n2.replace(" ", "")
n2 = int(n2)
n3 = n3.replace(" ", "")
n3 = int(n3)
n4 = n1 + n2
n5 = n4-n3
y = str(n5)
x = y.count("1")
print(x)
