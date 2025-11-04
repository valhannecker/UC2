console.log ('Iniciando os jogos vorazes! Você pode explorar para encontrar recursos (ou perigos). Ou você pode descansar e recuperar sua vida.')
let vida = 10
let recursos = 0
while (vida > 0 && recursos < 10) {
    console.log (`Sua vida atualmente é ${vida}, e seus recursos ${recursos}`)
    decisao = prompt ("Qual será sua ação agora? Explorar ou Descansar?")
switch (decisao.toLowerCase()) {
    case 'explorar':
        let explorarNum = Math.floor(Math.random() * 2);
        if (explorarNum === 0) {
            vida -= 1
            console.log ("Você encontrou um perigo e perdeu um ponto de vida!")
        } else {
            recursos += 1
            console.log ("Você encontrou um recurso!")
        }
    break
    case 'descansar':
        console.log("Você descansou e recuperou 1 ponto de vida!")
        vida += 1
    break
    default:
      console.log("Ação inválida! Digite 'Explorar' ou 'Descansar'.")
      break
}
}
if (vida > 0 && recursos === 10) {
    console.log (`Parabéns! Você chegou ao final do jogo com ${vida} pontos de vida e ${recursos} recursos!`)
} else if (vida === 0)
    console.log (`Fim de jogo! Você morreu com ${recursos} recursos!`)