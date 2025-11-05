//declaração da função
function printHelloWorld () {
    console.log ('Hello World!')
}
//executando a função
printHelloWorld()

//exercicio 1.
function welcomeText (){
    console.log ('Bem vindo Turma 25-2N!')
}
welcomeText()

//exercicio 2.
function addition () {
   const num1 = 5
   const num2 = 10
   console.log (5 + 10)
}
addition()

//exercicio 3.
function double () {
    const num1 = 5
    let doubleNumber = num1 * 2
    console.log (`A soma do número ${num1} é ${doubleNumber}`)
}
double()

//exemplo escopo
const a = 1

function imprimeVariavel () {
    const b = 2
    console.log ('A variável a:', a)
    console.log ('A variável b:', b)
}
imprimeVariavel ()

console.log (a) //imprime a vaariável normalmente
console.log (b) //não imprime o valor por que é uma variável local