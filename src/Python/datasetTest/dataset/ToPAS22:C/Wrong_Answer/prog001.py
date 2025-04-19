def main():
    num = int(input())

    n = int(input())

    lista = []

    c = 0

    for i in range(n):
        ansn = int(input())
        lista.append(ansn)
        c += ansn

    a = int(num/n)

    if num >= c:
        for i in lista:
            print(i)
    elif a == 0:
        for _ in lista:
            print(0)
    else:
        for i, k in enumerate(lista):
            if k <= a:
                continue
            else:
                lista[i] = a

        for i in lista:
            print(i)


if __name__ == "__main__":
    main()
