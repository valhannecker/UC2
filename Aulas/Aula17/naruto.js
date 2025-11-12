const personagens = [
    {nome: "Naruto", idade: 12, estilo: "taijutsu", jutsu: ["rasengan", "clone das sombras", "jutsu sexy"]},
    {nome: "Sasuke", idade: 12, estilo: "kenjutsu", jutsu: ["chidori", "bola de fogo"]},
    {nome: "Jiraya", idade: 50, estilo: "ninjutsu", jutsu: ["rasengan", "senjutsu"]} ]

function adicionarPersonagem(objeto) {
    personagens.push(objeto)
}

const novoPerso = {nome: "Sakura", idade: 12, estilo: "taijutsu", jutsu: ["jutsu de cura", "sakura interior"]}
adicionarPersonagem(novoPerso)

