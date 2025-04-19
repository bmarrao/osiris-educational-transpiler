def diferentes(arr):
    output = True
    for x in arr:
        if arr.count(x) > 1:
            output = False
    return output
def calcula_amizade(n , r1, r2):
    t1 = r1.count(r1[0]) == n
    t2 = diferentes(r2)
    if t1 and t2:
        return 2
    elif t1 or t2:
        return 1
    else:
        return 0
n_de_amigos = int(input())
resposta1 = input().split()
resposta2 = input().split()
print(calcula_amizade(n_de_amigos, resposta1, resposta2))