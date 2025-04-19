n = int(input())

capacities = []
fill=[]
while(n != 0):  
    capacities.append(n)
    fill.append(0)
    n = int(input())

target = int(input())

sequence = []

F, D = map(int, input().split())


while(F != 0 or D != 0):
    sequence.append([F, D])
    F, D = map(int, input().split())

for i in range(len(sequence)):
    if(sequence[i][0] == 0 and sequence[i][1] >= 0):
        fill[sequence[i][1] - 1] = capacities[sequence[i][1] - 1]
    elif(sequence[i][0] >= 0 and sequence[i][1] == 0):
        fill[sequence[i][0] - 1] = 0
    elif(fill[sequence[i][0] - 1] > capacities[sequence[i][1] - 1]):
        fill[sequence[i][1] - 1] = capacities[sequence[i][1] - 1]
        fill[sequence[i][0] - 1] -= capacities[sequence[i][1] - 1]
    elif(fill[sequence[i][1] - 1] + fill[sequence[i][0] - 1] <= capacities[sequence[i][1] - 1]):
        tmp = fill[sequence[i][1] - 1]
        fill[sequence[i][1] - 1] += fill[sequence[i][0] - 1]
        fill[sequence[i][0] - 1] -= tmp
    elif(fill[sequence[i][1] - 1] + fill[sequence[i][0] - 1] >= capacities[sequence[i][1] - 1]):
        tmp = fill[sequence[i][1] - 1]
        fill[sequence[i][1] - 1] = capacities[sequence[i][1] - 1]
        fill[sequence[i][1] - 0] = capacities[sequence[i][1] - 1] - tmp

if target in fill:
    print("CERTO")
else:
    print("ERRADO")