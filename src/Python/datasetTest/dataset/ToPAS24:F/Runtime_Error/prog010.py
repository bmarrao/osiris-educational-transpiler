m = int (input())
fi = []
for i in range(m):
    fi.append(int(input()))
ordem = int(input())
i = c = 0
i = int(i)
flag = False
while (fi[i]!=i or fi[i]>0 or fi[i]<m) and c < m:
    if (i==ordem):
        flag = True
    i = fi[i]
    if (fi[i]<0 or fi[i]>=m):
        print("POLICIA")
        break
    elif (fi[i]==i and flag):
        print (c+1)
        break
    elif (fi[i]==i and i !=ordem and not flag):
        print ("INCOMPETENTE")
        break
    c+=1
