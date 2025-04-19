rui = int(input())
mae = int(input())

count = 0

while (True):
    if (mae / 2) == rui:
        print(count)
        break
    else:
        count += 1
        mae += 1
        rui += 1
