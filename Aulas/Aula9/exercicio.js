//pedindo o nome do usuário
let nome = prompt("Digite seu nome:")

//pedindo o ano atual e transformando em number
let anoAtual = prompt("Digite o ano atual:")
let anoNumero = Number(anoAtual)

//pedindo o ano de nascimento e transformando em number
let anoNascimento = prompt("Digite o ano que você nasceu:")
let nascNumero = Number (anoNascimento)

//calculandoa idade do usuário
let idadeUser = anoNumero - nascNumero

//calculando se o usuário é maior de idade
let maiorIdade = idadeUser >= 18

//calculando idade em 2050
let age2050 = 2050 - nascNumero

console.log ("Nome:", nome)
console.log("Idade:", idadeUser)
console.log("É maior de idade:", maiorIdade)
console.log("Idade em 2050:", age2050)