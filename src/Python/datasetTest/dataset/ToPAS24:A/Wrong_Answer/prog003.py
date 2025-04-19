
h1, h2 =  input().split()
temp1 = h1 + h2

h3, h4 = input().split()
temp2 = h3 + h4


h5, h6 = input().split()
temp3 = h5 + h6

if int(temp3) in range(int(temp1), int(temp2)):
    print("Encontram-se")
else:
    print("Desencontram-se")
