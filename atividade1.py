#Desafio Front 

maior_altura_atual = 0
menor_altura_atual = 300
quantidade_homens = 0
quantidade_mulheres = 0
data = []
totalaltura = 0

#rep pra com as infos de altura e genero
for i in range (1, 5):
    print(f'Digite as informações da pessoa {i}:')
    altura = float(input("Digite a altura em centimetros: "))
    genero = input("Digite M (masculino) e F (Feminino): ").upper()

    if genero == "M":
        quantidade_homens += 1
        data.append({"altura": altura})
        totalaltura += altura
    elif genero == "F":
        quantidade_mulheres += 1
    else:
        print("Genero invalido, digite M para masculino e F para feminino")
        continue

    data.append({"genero": genero})

# definindo maior e menor altura
    if maior_altura_atual < altura:
        maior_altura_atual = altura
   

    if menor_altura_atual > altura:
        menor_altura_atual = altura
    

print("Resultados")
print(f"Maior altura informada: {maior_altura_atual} cm")
print(f"Menor altura informada: {menor_altura_atual} cm")
print(f"A media de altura dos homens é de: {totalaltura / quantidade_homens} cm")
print(f"A quantidade de mulheres é de {quantidade_mulheres}")