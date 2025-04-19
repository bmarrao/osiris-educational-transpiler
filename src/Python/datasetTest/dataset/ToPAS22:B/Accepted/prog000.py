def main():
    num = int(input())

    n = int(input())

    ia = 0

    for i in range(n):
        ab = int(input())
        if num >= ab > ia:
            ia = ab

    if ia != 0:
        print(ia)
    else:
        print("No free lunch")


if __name__ == "__main__":
    main()