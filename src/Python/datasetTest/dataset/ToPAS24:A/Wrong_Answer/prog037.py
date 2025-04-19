AE = input()
AS = input()
B = input()
AE = AE.split()
AS = AS.split()
B = B.split()
print(B)
print(AS)
print(AE)
if B[0] == AE[0] and B[1] > AE[1] or B[0] == AE[0] and B[1] == AE[1] or B[0] == AE[0] and B[1] == AE[1] or B[0] > AE[0] and B[0] < AS[0]:
        print("Encontram-se")
elif B[0] == AE[0] and B[1] < AE[1]:
        print("Desencontram-se")
