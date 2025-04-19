K, T = map(int, input().split())

a = input().split()
b = input().split()


for i in range(0, K*2, 2):
    str_ = ""
    for j in range(int(a[i])):
        str_+=a[i+1] + " "

    print(str_[0 : -1])

for i in range(0, T*2, 2):
    str_ = ""
    for j in range(int(b[i])):
        str_+=b[i+1] + " "

    print(str_[0 : -1])