DNatal = 0
dia, M = map(int,input().split())
m_31 = [1,3,5,7,8,10]
m_30 = [4,6,9,11]

if M == 12:
    if dia > 25:
        DNatal = 365 + (25 - dia)
    else:
        DNatal = 25 -dia
else:
    DNatal += 24
if M in m_31:
    while dia != 31:
        dia += 1
        DNatal += 1
elif M in m_30:
    while dia != 30:
        dia += 1
        DNatal += 1
elif M == 2:
    while dia != 28:
        dia += 1
        DNatal += 1
if M < 11:
    while M != 11:
        if M in m_31:
            DNatal += 31
        elif M in m_30:
            DNatal += 30
        else:
            DNatal += 28
        M += 1
print(DNatal)