fren_count = int(input())
qes_1 = list(map(int,input().split(" ")))
qes_2 = list(map(int,input().split(" ")))
prev_q1 = qes_1[0]
prev_q2 = -1
q_count1 = 0
q_count2 = 0
for idx in range(fren_count):
    q_1 = qes_1[idx]
    q_2 = qes_2[idx]
    if q_1 == prev_q1:
        q_count1 += 1
    else:
        q_count1 = 0
    if q_2 != prev_q2:
        q_count2 += 1
    else:
        q_count2 = 0
    prev_q1 = q_1
    prev_q2 = q_2


grau = 0
if q_count1 == fren_count and q_count2 == fren_count:
    grau = 2
elif q_count1 != fren_count and q_count2 != fren_count:
    grau = 0
else:
    grau = 1
print(grau)
