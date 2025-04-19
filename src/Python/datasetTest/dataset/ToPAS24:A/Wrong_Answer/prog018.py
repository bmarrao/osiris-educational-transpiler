ah1,am1 = map (int,input().split())
ah2,am2 = map (int,input().split())
bh1,bm1 = map (int,input().split())

if ((ah1 < bh1 < ah2) or (ah1 == bh1 and bm1 >= am1) or (ah2 == bh1 and bm1 <= am1)):
    print ("Encontram-se")
else: 
    print ("Desencontram-se")

