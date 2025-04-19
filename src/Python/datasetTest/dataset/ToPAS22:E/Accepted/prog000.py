def fi():
    fi = [0, 1]
    for i in range(2, 24):
        a = fi[i - 1] + fi[i - 2]
        fi.append(a)
    return fi

def main():
    n = int(input())
    rs = []
    l = fi()
    rs = []
    for i in range(n):
        a, b = map(int, input().split())
        if a > b:
            if a in l and (l[l.index(a) - 1] == b or l[l.index(a) + 1] == b):
                rs.append("OK")
            else:
                rs.append("FAKE")
        else:
            if b in l and (l[l.index(b) - 1] == a or l[l.index(b) + 1] == a):
                rs.append("OK")
            else:
                rs.append("FAKE")
    for i in rs:
        print(i)


if __name__ == '__main__':
    main()
