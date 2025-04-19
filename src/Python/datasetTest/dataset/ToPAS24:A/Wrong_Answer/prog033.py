AE = []
AS = []
B = []
AE = input()
AS = input()
B = input()
AE=AE.split(" ")
AS=AS.split(" ")
B=B.split(" ")
AE[0]=int(AE[0])
AS[0]=int(AS[0])
B[0]=int(B[0])
AE[1]=int(AE[1])
AS[1]=int(AS[1])
B[1]=int(B[1])
print(AE)
print(AS)
print(B)
if AE[0] > B[0]:
        if AS[0] < B[0]:
                print("Encontram-se")
if AE[0] < B[0] and AS[0]!=B[0] or AS[0]<B[0] and AE[0]!=B[0] :
        print("Desencontram-se")
if AE[0] == B[0]:
        if AE[1] < B[1]:
                print("Encontram-se")
        elif AE[1]==B[1]:
                print("Encontram-se")
        else:
                print("Desencontram-se")
if AS[0]==B[0] and AE[0]!=B[0]:
        if B[1]<AS[1]:
                print("Encontram-se")
        else:
                print("Desencontram-se")

