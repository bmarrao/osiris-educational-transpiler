num=int(input(""))
while(num<=-100 or num>=100):
    num=int(input(""))
if(num<0):
    print(f"{num} negativo!")
elif(num>0):
    print(f"{num} positivo!")
else:
    print(f"{num} zero!")