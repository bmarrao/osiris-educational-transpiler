N = int(input())
if not N >= -100 and N <= 100:
    exit()
if N == 0:
    print(N, "zero!")
if N > 0:
    print(N, "positivo!")
if N < 0:
    print(N, "negativo!")
