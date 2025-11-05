//exercicio 1.
// Imprimindo nomes
function olaNome (nome) {
    console.log (`Olá ${nome}`)
}

const nomes = ["Felipe", "Valentina", "Marina", "Liege"]
for (let nome of nomes) {
    olaNome (nome)
}

//exercicio 2.
//Soma de números
function soma (num1, num2) {
    let soma = num1 + num2
    console.log (`A soma é ${soma}`)
}
soma(1, 2)
