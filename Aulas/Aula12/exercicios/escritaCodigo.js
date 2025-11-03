//exercicio 4
idadeUsuario = Number (prompt("Qual sua idade?"))
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else 
    console.log ("Você não pode dirigir.")

//exercicio 5
horarioAula = (prompt("Em qual urno você estuda? Responda com M(matutino) V(vespertino) N(noturno)"))
if (horarioAula === "M") {
    console.log("Bom dia!")
} else if (horarioAula === "V") {
    console.log ("Boa tarde!")
} else if (horarioAula === "N") {
    console.log ("Boa noite!")
} else
    console.log ("Erro! Siga as instruções.")

//exercicio 6
turnoAula = prompt("Em qual urno você estuda? Responda com M(matutino) V(vespertino) N(noturno)")
switch (turnoAula.toLowerCase()){
    case 'm':
        console.log ("Bom dia!")
        break
    case 'v':
        console.log ("Boa tarde!")
        break
    case 'n':
        console.log ("Boa noite!")
        break
    default:
        console.log("Erro! siga as instruções.")
}

//exercicio 7
let generoFilme = prompt("Qual o genero do filme?")
let filmeFantasia
if (generoFilme == "fantasia") {
    filmeFantasia = true
} else
    filmeFantasia = false

let valorIngrresso = Number (prompt("Qual o valor do ingresso?"))
let valorInserido
if (valorIngrresso <= 15) {
    valorInserido = true
} else
    valorInserido = false

lancheUsuario = prompt("Que lanche você vai comprar?")

if (filmeFantasia&&valorInserido){
    console.log ("Bom filme!")
    console.log ("Aproveite seu lanche: ", + lancheUsuario)
} else
    console.log ("Escolha outro filme :(")
    

