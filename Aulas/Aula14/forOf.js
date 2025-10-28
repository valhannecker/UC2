//exemplo for of
//usado para percorrer arrays
const numeros = [14, 67, 89, 15, 23]
for (let numero of numeros) {
    console.log (numero)
}

//atividade concatenação com for of
const arrayString = ['oi', 'sumido', 'tudo', 'bem?', 'saudades']
let mensagem = ""
for (let string of arrayString) {
    mensagem += string + " "
}
console.log (mensagem)

//somando os números pares com for of
let array = [11, 15, 18, 14, 12, 13]
let pares = 0
for (let par of array) {
    if (par %2 === 0) {
        pares += par
    }
}
console.log (`a soma dos pares é ${pares}.`)

//lista de palavras longas
const array1 = ['camarao', 'lula', 'caracol', 'cachorro', 'sirifrito']
let maiorPalavra = ''
let tamanhoMaiorPalavra = 0
for (let palavra of array1) {
    if (palavra.length > tamanhoMaiorPalavra)
        maiorPalavra = palavra
}
console.log (`a maior palavra é ${maiorPalavra}`)

