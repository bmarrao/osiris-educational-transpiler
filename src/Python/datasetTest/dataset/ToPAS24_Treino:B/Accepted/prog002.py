k, t=input().split()

k = int(k)
t = int(t)

gg = input().split()
yy = input().split()

for i in range(1,k*2,2) :
    f = (int(gg[i-1]) * (str(gg[i]) + " "))
    print(f[0:-1])

for i in range(1,t*2,2) :
    f = int(yy[i-1]) * (str(yy[i]) + " ")
    print(f[0:-1])


