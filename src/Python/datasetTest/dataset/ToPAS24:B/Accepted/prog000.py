diasM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

l = input().split()

cDay = int(l[0])
cMonth = int(l[1])

totalDays = 0

if cMonth == 12:
    if cDay > 25:
        totalDays = diasM[11] - cDay + 1
        cMonth = 1
        cDay = 1

    for (mesCiclo) in range(len(diasM)):
        if mesCiclo + 1 >= cMonth:

            if int(mesCiclo + 1) == cMonth:
                for w in range(diasM[mesCiclo]):
                    if w + 1 >= cDay:
                        if mesCiclo == 11:
                            if w + 1 < 25:
                                totalDays = totalDays + 1
                        else:
                            totalDays = totalDays + 1
            else:
                for w in range(diasM[mesCiclo]):
                    if mesCiclo == 11:
                        if w + 1 < 25:
                            totalDays = totalDays + 1
                    else:
                        totalDays = totalDays + 1
else:
    for (mesCiclo) in range(len(diasM)):
        if mesCiclo+1 >= cMonth:

            if int(mesCiclo+1) == cMonth:
                for w in range(diasM[mesCiclo]):
                    if w+1 >= cDay:
                        if mesCiclo == 11:
                            if w + 1 < 25:
                                totalDays = totalDays + 1
                        else:
                            totalDays = totalDays + 1
            else:
                for w in range(diasM[mesCiclo]):
                    if mesCiclo == 11:
                        if w + 1 < 25:
                            totalDays = totalDays + 1
                    else:
                        totalDays = totalDays + 1

print(totalDays)