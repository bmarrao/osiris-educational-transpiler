K, T = [int(x) for x in input().split()]
b = None
c = None
for a in input().split():
    result = ""
    if not b:
        b = int(a)
    else:
        for i in range(b):
            if i < b - 1:
                result += f"{a} "
            else:
                result += a
        print(result)
        b = None
        c = None
for a in input().split():
    result = ""
    if not b:
        b = int(a)
    else:
        for i in range(b):
            if i < b - 1:
                result += f"{a} "
            else:
                result += a
        print(result)
        b = None
        c = None