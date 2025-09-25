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

console.log("Você tem cabelo?", temCabelo)
console.log("Você é gremista?", eGremista)
console.log("Você está vivo?", estaVivo)