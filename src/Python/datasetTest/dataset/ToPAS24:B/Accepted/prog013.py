dia,mes=input().split()
antes_natal=359
final=0
if int(mes)==1:#janeiro
    final=int(antes_natal)-int(dia)
    print(final)
elif int(mes)==2:#fevereiro
    final = int(antes_natal-31) - int(dia)
    print(final)
elif int(mes)==3:#março
    final = int(antes_natal-59) - int(dia)
    print(final)
elif int(mes)==4:#abril
    final = int(antes_natal-90) - int(dia)
    print(final)
elif int(mes)==5:#maio
    final = int(antes_natal-120) - int(dia)
    print(final)
elif int(mes)==6:#junho
    final = int(antes_natal-151) - int(dia)
    print(final)
elif int(mes)==7:#julho
    final = int(antes_natal-181) - int(dia)
    print(final)
elif int(mes)==8:#agosto
    final = int(antes_natal-212) - int(dia)
    print(final)
elif int(mes)==9:#setembro
    final = int(antes_natal-243) - int(dia)
    print(final)
elif int(mes)==10:#outubro
    final = int(antes_natal-273) - int(dia)
    print(final)
elif int(mes)==11:#novembro
    final = int(antes_natal-304) - int(dia)
    print(final)
elif int(mes)==12:#dezembro
    if int(dia)>25:
        depois_natal=365-(int(dia)-25)
        print(depois_natal)
    if int(dia)<25:
        final=int(antes_natal-334) - int(dia)
        print(final)
    if int(dia)==25:
        print("0")