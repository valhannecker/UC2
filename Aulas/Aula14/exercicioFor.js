//achando o maior número de uma array
let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for (let i = 0; i < 6; i++) { //índice = zero, condição de parada = 6, incrementa +1 (++) a cada loop
    if (array[i] > maiorNumero) { //SE o número x do array for maior que a variável
        maiorNumero = array[i] //será atribuido o número x à variável
    }
}
console.log('o maior número é ' + maiorNumero) //impriminodo o maior número

//programa que receba um array com números e devolva qual a soma dos números pares.
array = [11, 15, 18, 14, 12, 13]
let pares = 0
for (i = 0; i < 6; i++) {
    if (array[i] %2 === 0) {
        pares += array[i]
    }
}
console.log (`a soma dos pares é ${pares}.`)

