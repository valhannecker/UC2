const personagens = [
    {nome: "naruto", idade: 12, estilo: "taijutsu", jutsu: ["rasengan", "clone das sombras", "jutsu sexy"]},
    {nome: "sasuke", idade: 12, estilo: "kenjutsu", jutsu: ["chidori", "bola de fogo"]},
    {nome: "jiraiya", idade: 50, estilo: "ninjutsu", jutsu: ["rasengan", "senjutsu"]} ]

function adicionarPersonagem(objeto) {
    personagens.push(objeto)
    console.log (`O personagem ${objeto.nome} foi adicionado`)
}

const novoPerso = {nome: "Sakura", idade: 12, estilo: "taijutsu", jutsu: ["jutsu de cura", "sakura interior"]}
adicionarPersonagem(novoPerso)

/* FAZER DEPOIS
function buscarPersonagem (nomeBuscado) {
    function
const personagem = personagens.find (nome)

if (personagem) {
    console.log (`Nome: ${personagem.nome}`)
} else
    console.log ("Personagem não encontrado :(")
}

buscarPersonagem() */