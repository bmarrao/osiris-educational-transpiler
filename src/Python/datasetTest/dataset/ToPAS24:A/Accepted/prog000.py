inter1_h, inter1_min = input().split()
inter2_h, inter2_min = input().split()
cheg_h, cheg_min = input().split()

inter1_h = int(inter1_h)
inter1_min = int(inter1_min)
inter2_h = int(inter2_h)
inter2_min = int(inter2_min)

cheg_h = int(cheg_h)
cheg_min = int(cheg_min)

if cheg_h < inter1_h or cheg_h > inter2_h:
    print("Desencontram-se")
elif cheg_h == inter1_h and cheg_min < inter1_min:
    print("Desencontram-se")
elif cheg_h == inter2_h and cheg_min > inter2_min:
    print("Desencontram-se")
elif cheg_h == inter1_h and cheg_min == inter1_min:
    print("Encontram-se")
elif cheg_h == inter2_h and cheg_min == inter2_min:
    print("Encontram-se")
else:
    print("Encontram-se")