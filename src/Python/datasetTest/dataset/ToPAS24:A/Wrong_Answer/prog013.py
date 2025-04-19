cah , cam = input().split(" ")
sah , sam = input().split(" ")
bh , bm = input().split(" ")
cah=int(cah)
cam=int(cam)
sah=int(sah)
sam=int(sam)
bh=int(bh)
bm=int(bm)
if cah <= 23 or cah >= 0 or cam <= 59 or cam >= 0 or sah <= 23 or sah >= 0 or sam <= 59 or sam >= 0 or bh <= 23 or bh >= 0 or bm <= 59 or bm >= 0:

    if bh >= cah and bm < cam:
        print("Desencomtram-se")
    elif cah<=bh and bh<sah:
        print("Encontram-se")
    elif cah<=bh and cam>bm:
        print("Desencontram-se")
    elif cah==bh and cam==bm:
        print("Encontram-se")
    elif sah < bh:
        print("Desencontram-se")