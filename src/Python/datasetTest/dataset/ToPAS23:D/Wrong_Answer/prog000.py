j = int(input())

count = 0

nums = [0, 0, 0, 0, 0]

done = []

max = 0
winner = 1

passar = False

for i in range(j):
    pontos = 0
    nums[0], nums[1], nums[2], nums[3], nums[4] = map(int, input().split())

    done = []

    for k in nums:
        count_pontos = 0

        for n in done:
            if k == n:
                passar = True

        if passar:
            passar = False
        else:
            for m in nums:
                if k == m:
                    count_pontos += 1

            done.append(k)

            if count_pontos == 4:
                pontos += 10*k
            elif count_pontos == 3:
                pontos += 5*k
            elif count_pontos == 2:
                pontos += 3*k
            else:
                pontos += k

    if max == 0:
        max = pontos
    else:
        if pontos > max:
            max = pontos
        elif pontos == max:
            winner += 1

print(winner, max)