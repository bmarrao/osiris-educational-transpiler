jogo = [ [".",".",".",".",".",".","."],
         [".",".",".",".",".",".","."],
         [".",".",".",".",".",".","."],
         [".",".",".",".",".",".","."],
         [".",".",".",".",".",".","."],
         [".",".",".",".",".",".","."] ]

jogando = False

for e, i in enumerate(jogo):
    linha = input()
    jogo[e] = list(linha)

for e, i in enumerate(jogo):
    for n, j in enumerate(jogo[e]):
        if j == ".":
            jogando = True

        if n+4 < 7:
            if j == jogo[e][n+1] == jogo[e][n+2] == jogo[e][n+3]:
                if j != ".":
                    print("GANHOU " + j)
                    exit()
        if e+4 < 6:
            if j == jogo[e+1][n] == jogo[e+2][n] == jogo[e+3][n]:
                if j != ".":
                    print("GANHOU " + j)
                    exit()

        if n+4 < 7 and e+4 < 6:
            if j == jogo[e+1][n+1] == jogo[e+2][n+2] == jogo[e+3][n+3]:
                if j != ".":
                    print("GANHOU " + j)
                    exit()

        if n-4 < 7 and e+4 < 6:
            if j == jogo[e-1][n-1] == jogo[e-2][n-2] == jogo[e-3][n-3]:
                if j != ".":
                    print("GANHOU " + j)
                    exit()

if jogando:
    print("JOGANDO")
else:
    print("EMPATE")