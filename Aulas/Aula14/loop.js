/* let i = 0 //começo
while (i < 200) { //enquanto a condição (i) for menor que 200, as ações serão executadas e incrementa o iterador
    console.log(i)
    i++
}
console.log ("fim do código") */

/*
let estomago = 0
while(estomago <= 100) {
    console.log("Quero comer mais coxinhas", estomago)
    estomago = estomago + 10
} */

let numero
let numeroSomar = 0
while (numero !== 0) {
    numero = Number(prompt("Digite um número, quando desejar parar digite zero"))
    numeroSomar += numero
}
console.log (numeroSomar)

//exemplo do while
let c = 1
do {
    console.log("O valor de c é " + c)
    c++
} while (c <= 6)

//exemplo for
for (let i = 0; i <= 9; i++) {
    console.log("O valor de i é " + i)
}

//exemplo for com array
let array = [10, 4, 7, 8, 200, 77]

for (let i = 0; i < 6; i++) {
    console.log (array [i])
}