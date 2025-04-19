m = int(input(""))
n = int(input(""))

array = []
for i in range(n):
    t = int(input(""))
    array.append(t)

dias = 0
check = False
for i in range(n):
    if array[i] > m+5:
        dias += 1
    else:
        dias = 0

    if dias == 6:
        check = True
        print("WAVE")
        break

if not check:
    print("FLAT")