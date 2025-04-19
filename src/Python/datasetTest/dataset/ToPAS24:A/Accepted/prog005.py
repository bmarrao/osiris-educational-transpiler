x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
x3, y3 = map(int, input().split())


y3 /= 60
sum = x3 + y3
y1/=60
y2/=60
sum1=x1+y1
sum2=x2+y2
if(sum1<= sum and sum2 >= sum):
    print("Encontram-se")
else:
    print("Desencontram-se")