//exercicio de escrita 1
// declarando as variáveis sem atribuir valores
let nome
let idade

console.log (typeof (nome, idade))
// ambas serão impressas como undefined porque não foi atribuido nenhum valor

// fazendoo o usuario atribuir novos valores para as variáveis
nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

//imprimindo os tipos das variáveis
console.log(typeof(nome,idade))

//imprimindo "ola fulano voce tem x anos."
console.log("Olá", nome, "você tem", idade, "anos.")

//exercicio de escrita 2
//pedindo para o usuario inserir as respotas que serão atribuidas às variáveis
console.log("Responda as perguntas com sim ou não")
let temCabelo = prompt("Você tem cabelo?")
let eGremista = prompt("Você é gremista?")
let estaVivo = prompt("Você está vivo?")

//imprimindo as respostas com console.log
console.log("Você tem cabelo?", temCabelo)
console.log("Você é gremista?", eGremista)
console.log("Você está vivo?", estaVivo)


//exercicio de escrita 3
//declarando variáveis
let a = 10
let b = 25
//atribuindo novos valores
let troca = a
a = b
b = troca
//imprimindo os novos valores com console.log
console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)


//exercicio de escrita 4
//deeclarando novas variáveis e alterando seus valores de string para number
let valor1 = prompt("Digite o primeiro número:")
let num1 = Number(valor1)
let valor2 = prompt("Digite o segundo número:")
let num2 = Number(valor2)
x = num1 + num2 
y = num1 * num2

//imprimindo os resultados
console.log ("a soma dos números é:", x)
console.log ("a multiplicação dos números é:", y)