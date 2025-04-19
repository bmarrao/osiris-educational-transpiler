def main():
    a = input()

    to = 0
    for i in range(1,13,2):
        to += int(a[i])*3

    for i in range(0,12,2):
        to += int(a[i])
    to = to % 10
    to = 10 - to

    if str(to)[-1] == a[-1]:
        print("OK")
    else:
        print(f"ERRO {str(to)[-1::]}")


if __name__ == '__main__':
    main()