//exercicio de escrita 1.
const quantosAnimais = Number (prompt('Quantos bichinhos de estimação você tem?'))
if (quantosAnimais < 1) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantosAnimais > 0) {
    let bichinhos = []
    for (let i = 0; i < quantosAnimais; i++) {
        let nomesBichinhos = prompt('Qual o nome do seu pet?')
        bichinhos.push(nomesBichinhos)
    }
console.log (bichinhos)
} else
    console.log ("insira um valor válido")

//exercicio de escrita 2.
//exibindo valores do array
arrayOriginal = [5, 10, 1, 15, 20, 25]
for (let numero of arrayOriginal) {
    console.log (numero)
}
//exibindo valores divididos por 10
for (let numero of arrayOriginal) {
    let div10 = numero / 10
    console.log (div10)
}
//criando novo array com valores pares
let arrayPares = []
for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
        arrayPares.push(numero)
    } 
} console.log (arrayPares)

//criando novo array com strings
let arrayString = []
for (let i = 0; i < 6; i++) {
    arrayString.push (`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
} console.log (arrayString)

//imprimindo maior e menor número do array original
let maiorNumero = arrayOriginal [0]
let menorNumero = arrayOriginal[0]
for (let i = 0; i < 6; i++) {
    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    } else if (arrayOriginal [i] < menorNumero)
        menorNumero = arrayOriginal [i]
} console.log('o maior número é '+ maiorNumero +' e o menor é '+ menorNumero)
