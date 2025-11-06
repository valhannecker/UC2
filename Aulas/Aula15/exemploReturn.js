//usando return para criar uma variável com o valor do resultado
function calculaArea (altura,largura) {
    let area = altura * largura
    return area 
    //após o return, o código não executa mais nada
}

let resultadoArea = calculaArea(2,3)
console.log (resultadoArea)
console.log (calculaArea(2,3))

//EXERCÍCIOS
//exercicio 1.
function soma (num1, num2) {
    somaNum = num1 + num2
    return somaNum
}

let resultadoSoma = soma(5,6)
console.log ('o resultado da soma é:', resultadoSoma)

//exercicio 2.
const numeros = [5, 10, 15, 20]
const numerosPares = [2,6,8]

function divisao (array) {
    let n1 = (array [0]) / 2
    let n2 = (array[array.length - 1]) / 2
    let divNum = []
    divNum.push (n1, n2)
    return divNum
}

let resultadoDivisao = divisao(numeros)
console.log (resultadoDivisao)

divisao(numerosPares)

//refazendo o exercicio 2. com sintaxe de expressão de função
const soma = function (num1, num2) {
    let soma = num1 + num2
    console.log (`A soma é ${soma}`)
}

//refazendo o exercicio 3. com sintaxe de arrow function
const dobro = () => {
    const num1 = 5
    let doubleNumber = num1 * 2
    console.log (`A soma do número ${num1} é ${doubleNumber}`)
}
dobro()
