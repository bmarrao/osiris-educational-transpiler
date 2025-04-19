# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

num = int(input())
nome = 0
quant = 0
i=0
for i in range(num):
    nome = input()
    quant += float(input())

lmao = "{:.0f}"
print(lmao.format(quant))