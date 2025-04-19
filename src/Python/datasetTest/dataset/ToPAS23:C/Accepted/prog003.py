m = int(input())
n = int(input())

count = 0

onda = False

for i in range(n):
    t = int(input())

    count += 1

    if t <= (m+5):
        count = 0

    if count == 6:
        onda = True

if onda:
    print("WAVE")
else:
    print("FLAT")