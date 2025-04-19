chegadaA = input().split()
partidaA = input().split()
biaT = input().split()

state = ""

if (int(biaT[0]) >= int(chegadaA[0])):
    if (int(biaT[1]) >= int(chegadaA[1])):

        if (int(biaT[0]) > int(partidaA[0])):
            state = "Desencontram-se"
        else:
            state = "Encontram-se"

    else:
        state = "Desencontram-se"
else:
    state = "Desencontram-se"

print(state)