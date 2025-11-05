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

function divisao (array) {
    let n1 = array[array.length - 1]
    let n2 = array [0]
    let divNum = n1 / n2
    return divNum
}

let resultadoDivisao = divisao(numeros)
console.log (resultadoDivisao)