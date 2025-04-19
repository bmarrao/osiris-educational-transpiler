A = int(input())
B = int(input())

count = 0

while A != B/2:
    A += 1
    B += 1
    count += 1

print(count)