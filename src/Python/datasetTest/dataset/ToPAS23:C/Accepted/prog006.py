wave = False
onda = 0
tempmedia = int(input())
ndias = int(input())

for i in range(ndias):
    tempmaxima = int(input())
    if tempmaxima - 5 > tempmedia:
        onda += 1
    else:
        onda = 0

    if onda == 6:
        wave = True

if wave == True:
    print("WAVE")
else:
    print("FLAT")