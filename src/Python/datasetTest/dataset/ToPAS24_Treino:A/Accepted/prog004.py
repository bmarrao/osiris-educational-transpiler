a = int(input())

if (a > 0):
    s = "positivo!"
elif (a < 0):
    s = "negativo!"
else:
    s = "zero!"

print(str(a) + " " + str(s))