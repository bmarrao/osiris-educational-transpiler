def main():
    num = int(input())

    n = int(input())

    lista = []

    c = 0

    for i in range(n):
        ansn = int(input())
        lista.append(ansn)
        c += ansn

    a = num//n

    if num >= c:
        for i in lista:
            print(i)
    elif a == 0:
        for _ in lista:
            print(0)
    else:
        for i in lista:
            if i <= a:
                num -= i
                n -= 1
        a = num//n
        for i, k in enumerate(lista):
            if k <= a:
                continue
            else:
                lista[i] = a

        for i in lista:
            print(i)


if __name__ == "__main__":
    main()


'''
13
4
5
5
2
3
'''