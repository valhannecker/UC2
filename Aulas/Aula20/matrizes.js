//criando uma matriz com valores nulos
let jogoDaVelha = [
    [0, 0, 0], //linha 1
    [0, 0, 0], //linha 2
    [0, 0, 0] //linha 3
]

jogoDaVelha [1][2] = 1
console.log (jogoDaVelha)

//exemplo
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let soma = 0

for (let i = 0; i < matriz.length; i++) { //i representa as linhas
    for (let j = 0; j < matriz[i].length; j++) { //j representa as colunas
        // console.log(matriz[i][j]);
        soma += matriz[i][j]
    }
} console.log (`A soma dos valores da matriz é ${soma}`)

//exemplo 3

let matriz2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

//b) Crie uma função que percorre a matriz e calcula a soma de todos os elementos.
soma2 = 0
function somarMatriz (matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma2 += matriz[i][j]
        }
    }
}
somarMatriz(matriz2)
console.log (`A soma dos números é ${soma2}`)
