//EXERCICIO 1. de interprertação de código
function minhaFuncao (variavel) {
    return variavel * 5 //criando uma função que multiplicará o parâmetro inserido por 5
}

console.log (minhaFuncao(2)) //será impresso 10
console.log (minhaFuncao(10)) //será impresso 50

//b. se fosse removido o console.log, a função executaria o cálculo mas não exibiria o resultado no console.

//------------------------------------------


//EXERCICIO 2. de interpretação de código
let textoDoUsuário = prompt('Insira um texto:')

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuário)
console.log(resposta)

//a. o código verifica se há a palavra 'cenoura' na frase.
//b. será true, true, true


//------------------------------------------


//EXERCICIO 1. de escrita de código
function frase() {
    console.log ("eu sou Valentina, tenho 17 anos, moro no Rio Grande do Sul e sou estudante.")
    return 
}
frase()

//EXERCICIO 2. de escrita de código
//a)soma das duas entradas
function soma(num1, num2) {
    soma = num1 + num2
   return soma
}
console.log(soma(2,4))

//b)maior ou igual
function comparacao(num1, num2) {
    comparacao = num1 >= num2
   return comparacao
}
console.log(comparacao(2,4))

//c) verificando se é par
function par(numero) {
    par = (numero % 2 === 0)
   return par
}
console.log(par(4))

//d) verificando tamanho da mensagem
function tamanhoString (mensagem) {
    console.log (mensagem.length)
    console.log (mensagem.toUpperCase())
}
tamanhoString ("eu amo chocolate e pokemon")

//-------------------------------------------------
//EXERCICIO 3. escrita de código
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
function soma (n1, n2) {
    return n1 + n2
    }
function subtracao (n1, n2) {
    return n1 - n2
    }
function divisao (n1, n2) {
    return n1 / n2
    }
function multiplicacao (n1, n2) {
    return n1 * n2
    }
    
    console.log ("Números inseridos:", n1, "e", n2, `\n Soma: ${soma(n1, n2)} \n Subtração: ${subtracao(n1, n2)} \n Divisão: ${divisao(n1, n2)} \n Multiplicação: ${multiplicacao(n1, n2)}`)
