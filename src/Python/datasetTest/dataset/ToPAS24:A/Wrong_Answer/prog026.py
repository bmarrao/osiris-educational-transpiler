cah, cam = input().split(" ")
sah, sam = input().split(" ")
bh, bm = input().split(" ")
cah = int(cah)
cam = int(cam)
sah = int(sah)
sam = int(sam)
bh = int(bh)
bm = int(bm)
if cah <= 23 and cah >= 0 and cam <= 59 and cam >= 0 and sah <= 23 and sah >= 0 and sam <= 59 and sam >= 0 and bh <= 23 and bh >= 0 and bm <= 59 and bm >= 0 and sah>=cah:

    if bh >= cah and bm < cam:
        print("Desencomtram-se")
    elif cah <= bh and bh < sah:
        print("Encontram-se")
    elif cah <= bh and cam > bm:
        print("Desencontram-se")
    elif cah == bh and cam == bm:
        print("Encontram-se")
    elif sah < bh:
        print("Desencontram-se")
    elif bh < cah:
        print("Desencontram-se")
else:
    exit()