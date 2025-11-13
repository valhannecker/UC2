// Exercícios de interpretação de código
const filme = {
    nome: "Auto da compadecida",
    ano: 2000,
    elenco: [
        "Mateheus", 'Selton Mello', "Denise Fraga", "Virginia Cavendish"],
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"},
        {canal:"Canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}
console.log (filme.elenco[0]) //será impresso = Matheus
console.log (filme.elenco [filme.elenco.length - 1]) //será impresso = virginia cavendish
console.log (filme.transmissoesHoje [2]) //será impresso o objeto de índice 2 (globo)