k, t=input().split()

k = int(k)
t = int(t)

gg = input().split()
yy = input().split()

for i in range(1,k*2,2) :
    print((int(gg[i-1]) * (str(gg[i]) + " ")))

for i in range(1,t*2,2) :
    print((int(yy[i-1]) * (str(yy[i]) + " ")))


