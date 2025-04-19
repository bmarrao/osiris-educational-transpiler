input1 = input().split(' ')
input2 = input().split(' ')
input3 = input().split(' ')

h, m = input1[0], input1[1]
hs, ms = input2[0], input2[1]
hb, mb = input3[0], input3[1]

if int(hb) == int(h) and int(hb) <= int(hs) and int(mb) >= int(m) :
    print("Encontram-se")
elif int(hb) > int(h) and int(hb) < int(hs) :
    print("Encontram-se")
elif int(hb) != int(h) and int(hb) == int(hs) and int(mb) <= int(ms) :
    print("Encontram-se")
else :
    print("Desencontram-se")