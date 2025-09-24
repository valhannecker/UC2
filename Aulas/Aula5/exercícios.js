//pedindo o nome e idade do usuário
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")

//verificando os tipos das variáveis
console.log (typeof(nome))
console.log (typeof(idade))

//convertendo valor string em number
const idadeNumber = Number (idade)
console.log (typeof(idadeNumber))

//convertendo number em string
const idadeString = idadeNumber.toString()
console.log (typeof(idadeString))