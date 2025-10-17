//exercicio 4
idadeUsuario = Number (prompt("Qual sua idade?"))
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else 
    console.log ("Você não pode dirigir.")

//exercicio 5
horarioAula = (prompt("Em qual urno você estuda? Responda com M(matutino) V(vespertino) N(noturno)"))
if (horarioAula === M) {
    console.log("Bom dia!")
} else if (horarioAula === V) {
    console.log ("Boa tarde!")
} else if (horarioAula === N) {
    console.log ("Boa noite!")
} else
    console.log ("Erro! Siga as instruções.")

//exercicio 6
turnoAula = prompt("Em qual urno você estuda? Responda com M(matutino) V(vespertino) N(noturno)")
switch (turnoAula.toLowerCase()){
    case 'M':
        console.log ("Bom dia!")
        break
    case 'V':
        console.log ("Boa tarde!")
        break
    case 'N':
        console.log ("Boa noite!")
        break
    default:
        console.log("Erro! siga as instruções.")
}

let generoFilme = prompt("Qual o genero do filme?")
let valorIngrresso = Number (prompt("Qual o valor do ingresso?"))