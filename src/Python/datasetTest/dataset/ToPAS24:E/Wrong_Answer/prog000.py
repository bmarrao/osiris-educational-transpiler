length_n1, length_n2, length_result = [int(x) for x in input().split()]
n1 = int(input().replace(" ", ""))
n2 = int(input().replace(" ", ""))
g = input()
lr = [int(x) for x in g.split()]
r = int(g.replace(" ", ""))
r2 = n1 + n2
lr2 = []
for i in str(r2):
    lr2.append(int(i))
alteracao = 0
incorrect = True
while incorrect:
    if r == n1 + n2:
        incorrect = False
    else:
        for i in range(1, max(length_result, len(lr2)) + 1):
            if lr[-i] != lr2[-i]:
                if lr[-i] + 1 >= 10:
                    if i == len(lr):
                        lr[0] = 0
                        lr.insert(0, 1)
                        alteracao += 1
                        break
                    else:
                        j = i
                        while lr[-j] == 9:
                            if j == len(lr):
                                lr[0] = 0
                                lr.insert(0, 1)
                                break
                            else:
                                lr[-j] = 0
                                j += 1
                        lr[-j] += 1
                        alteracao += 1
                        break
                else:
                    lr[-i] += 1
                    alteracao += 1
                    break
            if i == len(lr) and len(lr) < len(lr2):
                lr.insert(0, 1)
                alteracao += 1
                incorrect = False
                break
        else:
            incorrect = False
print(alteracao)