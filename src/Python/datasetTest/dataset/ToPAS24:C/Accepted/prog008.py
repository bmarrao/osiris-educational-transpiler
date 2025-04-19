
c = int(input())

n1 = set(map(int, input().split()))

n2 = set(map(int, input().split()))

pontos = 0
if len(n1) == 1:
    pontos += 1
if len(n2) == c:
    pontos += 1

print(pontos)
