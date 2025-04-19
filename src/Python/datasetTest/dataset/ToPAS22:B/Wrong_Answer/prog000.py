# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

num = int(input())
gratis = -1
amigos = int(input())
i= 0

for i in range(amigos):
    num_ = int(input())

    if num_<num:
        if num_ >= gratis:
            gratis = num_


if gratis == -1:

    print("No free lunch")
else:
    print(gratis)