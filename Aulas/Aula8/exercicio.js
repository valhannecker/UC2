//solicitando queo usuário insira os dois valores
let firstVariable = prompt("digite o primeiro número:")
let secondVariable = prompt("digite o segundo número:")

let firstNumber = Number(firstVariable)
let secondNumber = Number(secondVariable)
//1
console.log("O primeiro número é igual ao segundo?", firstNumber === secondNumber)
//2
console.log("O primeiro número é diferente do segundo?", firstNumber !== secondNumber)
//3
console.log("O primeiro número é maior que o segundo?", firstNumber > secondNumber)
4//
console.log("O primeiro número é menor que o segundo?", firstNumber < secondNumber)