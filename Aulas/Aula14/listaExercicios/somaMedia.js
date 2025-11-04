let number
let soma = 0
for (let i = 0; i <5; i++) {
    number = Number (prompt('Insira 5 números'))
    soma += number
}
console.log (`A soma dos números é ${soma}`)

//calculo das médias
let somaMedia = 0
let media = 0
for (let i = 1; i <= 5; i++) {
    let notas = Number (prompt(`Digite a ${i}ª nota:`))
    somaMedia += notas
}
media = somaMedia / 5
console.log (`A média das notas é: ${media}`)