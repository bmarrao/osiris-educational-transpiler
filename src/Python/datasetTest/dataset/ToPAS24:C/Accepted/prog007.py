n = int(input())

pr = input().split()
sg = input().split()

isEQual = False

if(pr.count(pr[0]) == n):
    isEQual = True

isDIff = True

for i in range(n):
    if(sg.count(sg[i]) > 1):
        isDIff = False
        

sum_ = 0

if(isEQual == True):
    sum_+=1
if(isDIff == True):
    sum_+=1

print(sum_)