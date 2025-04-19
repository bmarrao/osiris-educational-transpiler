count = int(input())
dic = {}
hier = {}

for i in range(count):
    dic[i] = {}
    dic[i]["func"] = list(map(lambda x: int(x), input().split()))

for i in range(count):
    dic[i]["count"] = int(input())

contar = 0

def func(i, i2):
    i2 = i2 + 1;
    global contar
    if (dic[i - 1]["func"][0] == 0):
        if (i2 > 2):
            contar += dic[i - 1]["count"]
    else:
        for x in dic[i - 1]["func"]:
            func(x, i2)
func(1, 0)

print(str(contar + dic[0]["count"]) + " USD")