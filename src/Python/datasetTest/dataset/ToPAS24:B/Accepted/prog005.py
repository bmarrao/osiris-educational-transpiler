DNatal = 0
dia, mes = map(int,input().split())
m_31 = [1,3,5,7,8,10]
m_30 = [4,6,9,11]

if mes == 12:
    if dia > 25:
        DNatal = 365 + (25 - dia)
    else:
        DNatal = 25 - dia
else:
    
    DNatal += 25
    
if mes in m_31:
    DNatal += (31 - dia)
    
elif mes in m_30:
    DNatal += (30 - dia)
elif mes == 2:
    DNatal += (28 - dia)
mes += 1
if mes < 12:
    while mes != 12:
        if mes in m_31:
            DNatal += 31
        elif mes in m_30:
            DNatal += 30
        else:
            DNatal += 28
        mes += 1
print(DNatal)