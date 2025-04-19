# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

num = int(input())
array = []
gratis = -1
amigos = int(input())
i= 0

for i in range(amigos):

    num_ = int(input())
    p = 0

    for p in range(len(array)):

        while num_ == array[p]:
            num_ = int(input())

    array.append(num_)
    if num_<num:
        if num_ >= gratis:
            gratis = num_


if gratis == -1:

    print("No free lunch")
else:
    print(gratis)