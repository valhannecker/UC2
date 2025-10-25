let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for (let i = 0; i < 6; i++) {
    if (array[i] > maiorNumero) {
        maiorNumero = array[i]
    }
}
console.log('o maior número é ' + maiorNumero)