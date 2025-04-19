m = input()
text = input()
palavras = []
palavras = list(text.split())
i = 0
if(int(m) >= 0 and int(m) <= 20 and (len(palavras))>= 2):
    while(i < int(m)):
        print(palavras[(len(palavras)-1)])
        i = i + 1