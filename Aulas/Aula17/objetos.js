const professor = {
    nome : 'Lucas',
    idade :33,
    email :'lucas.g.f.alves@gmail.com'
}

console.log(professor.nome)
console.log(professor['idade'])
console.log(professor.email)

const laptop = {
    tela : 15,
    processador: "Ryzen", 
    marca : "lenovo",
    modelo : "K14"
}

//EXERCICIO 1

const filme = {
    nome : "Clube da luta",
    direcao : "David Fincher",
    lancamento : 1999,
    elenco : ["Brad Pitt", "Edward Norton", "Helena Bonham", "Jared Leto"],
    assistiu : true,
    personagens : ["Tyler Durden", "Narrador", "Marla Singer", "Angel Face"]
}
//imprimindo os atores e seus respectivos personagens
console.log (filme.elenco[0], "interprteta:", filme.personagens[0], "\n", filme.elenco[1], "interprteta:", filme.personagens[1], "\n", filme.elenco[2], "interprteta:", filme.personagens[2], "\n",filme.elenco[3], "interprteta:", filme.personagens[3], "\n")
//alterando o primeiro ator pela xuxa
filme.elenco[0] = "Xuxa"

console.log (filme.nome)
console.log (filme.direcao)
console.log (filme.lancamento)
console.log (filme["elenco"])
console.log (filme["assistiu"])

//EXERCICIO 2
const pessoa = {
    nome : "Pamella",
    idade : 27,
    gêneroMusical : "MPB"
}

console.log("O nome da pessoa é " + pessoa.nome + ", ela tem " + pessoa.idade + " anos e gosta muito de "+ pessoa.gêneroMusical)

//EXEMPLO ARRAY DE OBJETOS
const professores = [
    {nome : "Lucas", modulo : 2},
    {nome : "Dal", modulo : 1},
    {nome : "Valter", modulo : 1}
]
console.log ("O professor ", professores[0].nome, "deu o módulo:", professores[0].modulo)