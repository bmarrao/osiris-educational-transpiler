m = int(input())

a = []

c = 0

pos = 0

res = False


for x in range(m):
    a.append(int(input()))

pos= int(input())
for x in range(m-1):
        
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
    
    
    
    c += 1


if res == False:
    print("INCOMPETENTE")





