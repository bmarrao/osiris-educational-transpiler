m = 0
m = int(input())
n = 0
n = int(input())
temps = []

tlida = 0
i = 0
for i in range(n):
    tlida = int(input())
    temps.append(tlida)

i = 0
cont = 0
wave = 0
while(i < n):
    if(temps[i] > (m+5)):
        cont = cont + 1
    if(temps[i] <= (m+5)):
        cont = 0
    if(cont == 6):
        wave = 1
        i = n
    i = i + 1

if(wave == 1):
    print("WAVE")
else:
    print("FLAT")