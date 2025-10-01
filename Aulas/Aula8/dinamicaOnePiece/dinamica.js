//Declarando as variáveis da Dinamica One Piece
let ouroTotal = 75000
let membrosTripulacao = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

ouroPorMembro = ouroTotal / membrosTripulacao
restoOuro = ouroTotal % membrosTripulacao
novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecompensa
poderLuffy = recompensaBaseLuffy * bonusExperiencia
reducaoAumento = aumentoRecompensa -= 50000000

console.log("O valor do ouro por mebmbro é:", ouroPorMembro)
console.log("O resto do ouro é:", restoOuro)
console.log("O valor da nova recompensa do Luffy é:", novaRecompensaLuffy)
console.log("O valor de poder temporário de Luffy é:", poderLuffy)
console.log("O valor reduzido do aumeto da recompensa é:", reducaoAumento)

//segunda parte
let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNoMi = true
let inimigoTemHaki = true
let combateJusto = "sim"
let combateRapido = "sim"

let podeVencer = forcaTripulacao >= forcaInimigo
console.log("A tripulação pode vencer?", podeVencer)
let riscoAlto = chanceVitoria < limiteSeguranca
console.log("O risco é alto?", riscoAlto)
console.log ("A batalha será fácil?", combateJusto === combateRapido)
