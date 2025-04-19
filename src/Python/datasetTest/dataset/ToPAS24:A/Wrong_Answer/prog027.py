hinicio,minicio = input().split()
hfim,mfim = input().split()
hbia,mbia = input().split()

if int(hbia)<int(hfim) and int(hbia)>int(hinicio):
    print("Encontram-se")

if int(hbia)>int(hfim) or int(hbia)<int(hinicio):
    print("Desencontram-se")

if int(hbia)==int(hinicio) and int(mbia)>=int(minicio)  or int(hbia)==int(hfim) and int(mbia)<=int(mfim)  :
    print("Encontram-se")

if int(hbia)==int(hinicio) and int(mbia)<int(minicio):
    print("Desencontram-se")

if int(hbia)==int(hfim) and int(mbia)>int(mfim):
    print("Desencontram-se")
#if int(hbia)==int(hfim) and int(mbia)<=int(mfim)  :
 #   print("Encontram-se")

#igauis
#if int(hbia)==int(hfim) and int(hbia)==int(hinicio) and int(mbia)==int(minicio) and int(mbia)==int(mfim):
    #print("Encontram-se")

