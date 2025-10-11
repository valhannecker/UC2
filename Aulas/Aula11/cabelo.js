let notaAcessórios = Number (prompt("Dê uma nota de 1 a 10 para o número de acessórios"))
let notaCores = Number (prompt("Dê uma nota de 1 a 10 para o número de cores"))
let notaBrilho = Number (prompt("Dê uma nota de 1 a 10 para o fator brilho"))

let pontuacaoTotal = (notaAcessórios * 5) + (notaCores * 3) + (notaBrilho * 10)
let metaPontuacao = 80

let pontuacaoAtingida = pontuacaoTotal >= metaPontuacao
console.log ("Você atingiu a pontuação?", pontuacaoAtingida, "você ficou com", pontuacaoTotal, "pontos.")


if (pontuacaoAtingida === true) {
    console.log ("parabéns! você atingiu a meta")
} else 
    console.log("Infelizmente você não atingiu a meta, você ficou com", (metaPontuacao - pontuacaoTotal), "pontos faltanado")
