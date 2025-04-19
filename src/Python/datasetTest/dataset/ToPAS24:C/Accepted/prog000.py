c = int(input())
valores1 = input().split()
valores2 = input().split()

flag = True
flag2 = False

for i in range(c):
    for i2 in range(c):
        if (i != i2):
            if (valores1[i] != valores1[i2]):
                flag = False

for i in range(c):
    for i2 in range(c):
        if (i != i2):
            if (valores2[i] == valores2[i2]):
                flag2 = True

pontos = 0

if (flag == True): pontos +=1
if (flag2 == False): pontos +=1

print(pontos)