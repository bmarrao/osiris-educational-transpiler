m=int(input())
n=int(input())
lst=[]
c=0
l=0
for i in range(n):
    t=int(input())
    lst.append(t)
u=0
    
for i in lst:
    if i>(m+5):
        c+=1
        if c==6:
            u=1
    else:
        c=0
if u==1:
    print('WAVE')
else:
    print('FLAT')

        


            
        
        
