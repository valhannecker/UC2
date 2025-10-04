/*exercicio fixacao 1 (inerpretacao)
a. false
b. false
c. true
d. Boolean */

//exercicio fixacao 2 (interpreetacao)
// serão impresso os dois numeros inseridos de forma consecutiva, porque ambos são valores string, como eu corrigiria:
let primeiroNumero = prompt("digite um numero")
let numeroUm = Number(primeiroNumero)
//com o comando number eu transformo o valor string em number, após transformar os dois valores eu somaria as novas variáveis com valor number


//exercicio fixacao 3 (escrita de codigo)
//pedindo a idade do usuario e do amigo e transfornando os valores em number
let idadeUser = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade de seu amigo?")
let idadeNumero = Number (idadeUser)
let amigoNumero = Number (idadeAmigo)

let maisVelho = idadeUser > idadeAmigo
console.log("Sua idade é maior do que a idade do seu amigo?", maisVelho) //verificando se é mais velho
let diferencaIdade = idadeNumero - amigoNumero
console.log ("Sua diferença de idade é de", diferencaIdade, "anos.") //exibindo a diferença de idade


//exercicio fixacao 4 (escrita de codigo)
numeroPar = prompt("Digite um numero par:")
parNumero = Number(numeroPar)

restodivisao = parNumero % 2
console.log("O resto da divisão é:", restodivisao)
//todos os números pares tem o resto zero, o módulo (%2) é usado para indicar se um número é par ou impar
//se o usuário imprimir um número impar, o resto será diferente de zero


//exercicio fixacao 5 (escrita de codigo)
let idadeAnos = prompt ("Digite sua idade:")
idadeNum = Number (idadeAnos) //convertendo o valor string em numero
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeAnos * 8766 //quantidade de horas em um ano
//imprimindo as informacoes com console.log
console.log("Sua idade em anos é:", idadeNum)
console.log("Sua idade em meses é:", idadeMeses)
console.log("Sua idade em dias é:", idadeDias)
console.log("Sua idade em horas é:", idadeHoras)


//exercicio fixacao 6 (escrita de codigo)
numeroPrimeiro = prompt("Digite o primeiro numero:") 
numeroSegundo = prompt("Digite o segundo número:")

primeiroNumero = Number (numeroPrimeiro)
segundoNumero = Number (numeroSegundo)

maiorQueSegundo = primeiroNumero > segundoNumero
igualAoSegundo = primeiroNumero === segundoNumero
divisivel = primeiroNumero % segundoNumero === 0
divisivelSegundo = segundoNumero % primeiroNumero === 0

console.log (" O primeiro numero é maior que segundo?", maiorQueSegundo)
console.log ("O primeiro numero é igual ao segundo?", igualAoSegundo)
console.log ("O primeiro numero é divisível pelo segundo?", divisivel)
console.log ("O segundo numero é divisível pelo primeiro? true", divisivelSegundo)

//DESAFIO!!!
/* Graus Fahrenheit para Kelvin
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

- Graus Celsius para Graus Fahrenheit
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32*/

// °C + 273,15

// a) Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também;
let fahrenheit = 77
let fahrenheitKelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log ("77°F em Kelvin é igual a:", fahrenheitKelvin,"K")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também;
let celsius = 80
let celsiusFahreinheit = celsius * (9/5) + 32
console.log ("80°C em Fahrenheit é igual a:", celsiusFahreinheit, "°F")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também;
celsius = 30
let celsiusKelvin = celsius + 273.15
celsiusFahreinheit = celsius * (9/5) + 32

console.log("30°C em °F é igual a", celsiusFahreinheit, "e em K é igual a", celsiusKelvin)

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter;
celsius = prompt("Digite um valor em para transforma-lo em Kelvin e Fahrenheit")
celsiusNum = Number (celsius)
celsiusKelvin = celsiusNum + 273.15
celsiusFahreinheit = celsiusNum * (9/5) + 32

//DESAFIO 2!!!
let kWh = prompt("digite a quantidade de Quilowatt-hora consumida em sua residência:")
let valorKWh = 0.05 * kWh
console.log("O valor da energia consumida é R$", valorKWh)

kWh = 280
valorKWh = 0.05 * kWh
console.log ("O valor a ser pago por uma residência que consume 280 quilowatt-hora é: R$", valorKWh)

let desconto = valorKWh * 15 / 100
let valorPago = valorKWh - desconto

console.log ("O valor a ser pago aplicando um desconto de 15% é de: R$", valorPago)

//DESAFIO 3!!!!
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima a resposta no console da seguinte forma: 20lb equivalem a X kg
let lb = 20
lbParaKg = lb / 2,205
console.log ("20 lb equivalem a", lbParaKg,"kg")

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima a resposta no console da seguinte forma: 10.5oz equivalem a X kg
let oz = 10.5
ozParaKg = oz / 35,274
console.log ("10.5 oz equivalem a", ozParaKg,"kg")

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima a resposta no console da seguinte forma: 100mi equivalem a X m
let mi = 100
miParaM = mi * 1609
console.log ("100 milhas equivalem a", miParaM, "metros")

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima a resposta no console da seguinte forma: 50ft equivalem a X m
let ft = 50
ftParaM = ft / 3,281
console.log ("50 ft equivalem a", ftParaM,"metros")

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima a resposta no console da seguinte forma: 103.56gal equivalem a X l
let gal = 103.56
galParaLitro = gal * 3,785
console.log ("103.56 gal equivalem a", galParaLitro, "litros.")

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima a resposta no console da seguinte forma: 450 xic equivalem a X l
let xic = 450
xicParaLitro = xic / 0,2366

// g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
ft = prompt ("insira um valor em ft")
ftNumber = Number (ft)
ftParaM = ftNumber / 3,281
console.log ("50 ft equivalem a", ftParaM,"metros")