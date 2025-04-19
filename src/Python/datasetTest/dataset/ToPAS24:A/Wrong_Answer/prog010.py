cah, cam = input().split(" ")
sah, sam = input().split(" ")
bh, bm = input().split(" ")
cah = int(cah)
cam = int(cam)
sah = int(sah)
sam = int(sam)
bh = int(bh)
bm = int(bm)

if 23 >= cah >= 0 and 59 >= cam >= 0 and 23 >= sah >= 0 and 59 >= sam >= 0 and 23 >= bh >= 0 and 59 >= bm >= 0:
    if cah == sah and sam < cam:
        exit()
    if bh >= cah and bm < cam:
        print("Desencontram-se")
    elif cah <= bh < sah:
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
