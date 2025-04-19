alex_h,alex_m = map(int,input().split())
out_h ,out_m = map(int,input().split())
bia_h ,bia_m = map(int,input().split())

alex_time = (alex_h * 100) + alex_m

bia_time = (bia_h * 100) + bia_m
out_time = (out_h * 100) + out_m

encontramse = bia_time >= alex_time and bia_time <= out_time

print("Encontram-se" if encontramse else "Desencontram-se")