C = input();
input1 = input().split(' ')
input2 = input().split(' ')
input1final = bool()
input2final = bool()
for i in len(input1) :
    if input1[i+1] != input1[i] :
        input1final = bool(0)
        break
    else :
        input1final = bool(1)

for j in len(input2) :
    if input2[i+1] != input2[i] :
        input2final = bool(0)
        break
    else:
        input2final = bool(1)

if input1final == bool(1) and input2final == bool(1) :
    print("2")
elif input1final == bool(0) and input2final == bool(0) :
    print("0")
else :
    print("1")


