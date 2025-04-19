M,N=input().split()
m=int(M)
n=int(N)
z=2*n
semente=0
l=[]
l1=[]
l1=input().split()
for t in range(len(l1)):
    l.append(int(l1[t]))
for x in range(len(l)):
    semente=semente+l[x]*10**(len(l)-1-x)
for g in range(m):
    o=""
    w=""
    uj=""
    semqua=semente**2
    ssemqua=str(semqua)
    tam=len(ssemqua)
    for t in range(4*n-tam):
        ssemqua="0"+ssemqua
    r=list(ssemqua)
    for f in range(n,3*n):
        o=o+r[f]
    k=int(o)
    pseudo=k*(10**(-2*n))
    psiu=str(pseudo)
    if len(psiu)!=(2*n+2):
        for ghj in range(2*n+2-len(psiu)):
            psiu=psiu+"0"
    df=list(psiu)
    for rd in range(2*n+2):
        uj=uj+df[rd]
    print(uj)
    semente=k