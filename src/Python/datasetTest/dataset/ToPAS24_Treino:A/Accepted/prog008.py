n=int(input(""))
while(n<-100 or n>100):
    n=int(input(""))
if(n<0):
    print(f"{n} negativo!")
elif(n>0):
    print(f"{n} positivo!")
else:
    print(f"{n} zero!")