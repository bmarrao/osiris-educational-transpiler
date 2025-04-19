hinicio,minicio = input().split()
hfim,mfim = input().split()
hbia,mbia = input().split()


if int(hbia)==int(hinicio) and int(mbia)<int(minicio) or int(hbia)==int(hinicio) and int(mbia)>int(mfim) or int(hbia)>int(hfim) or int(hbia)<int(hinicio):
    print("Desencontram-se")
else:
    print("Encontram-se")

