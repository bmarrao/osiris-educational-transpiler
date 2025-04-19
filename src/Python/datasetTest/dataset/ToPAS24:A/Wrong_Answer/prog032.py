h1=input().split()
h2=input().split()
h3=input().split()

if int(h1[0])<0 or int(h1[0])>23 or int(h2[0])<0 or int(h2[0])>23 or int(h3[0])<0 or int(h3[0])>23 or int(h1[1])<0 or int(h1[1])>59 or int(h2[1])<0 or int(h2[1])>59 or int(h3[1])<0 or int(h3[1])>59:
    exit()

if (h3<=h2 and h3>=h1):
    print("Encontram-se")
else:
    print("Desencontram-se")




















