m = int(input())

a = []

c = 0

pos = 0

res = False

sal = []


for x in range(m):
    a.append(int(input()))

pos= int(input())
while True:
        
    o = a[pos]

    if (o == pos):
        print(c)
        res = True
        break

    if (o < 0 or o >= m):
        print("POLICIA")
        res = True
        break

    pos = o

    if sal.count(o) > 0:
        break
    sal.append(o)
    
    
    
    c += 1


if res == False:
    print("INCOMPETENTE")





