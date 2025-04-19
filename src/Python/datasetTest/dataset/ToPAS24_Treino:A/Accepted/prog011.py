num = int(input())

state = ""

if num < 0:
    state = " negativo!"
elif num == 0:
    state = " zero!"
else:
    state = " positivo!"

print(str(num) + state)

