//ATIVIDADE AVALIATIVA: MINECRAFT

//DESAFIO 1
//criando as varáveis que definem a velocidade de mineração da ferramneta de cada material
const velocidadeMadeira = 20
const velocidadePedra = 40
const velocidadeFerro = 60
const velocidadeDiamante = 80

//criando a variável do bloco a ser minerado
const blocoMinerar = "minério de diamante"

//criando um if/else para definir a ferramenta ideal com base no bloco minerado
 if (blocoMinerar == "minério de diamante") {
    console.log("Use a picareta de diamante: velocidade "+ velocidadeDiamante) //se o tipo do bloco for minério de diamante

} else if (blocoMinerar == 'obsidiana') {
    console.log("Use a picareta de diamante: velocidade "+ velocidadeDiamante) //se o tipo do bloco for obsidiana

} else if (blocoMinerar == 'pedra') {
    console.log("Picareta de Ferro ou Pedra é o ideal: velocidades "+ velocidadeFerro, "ou " + velocidadePedra) //se o tipo do bloco for pedra

} else
    console.log ("Qualquer ferramenta funciona, mas a de madeira é a mais simples: velocidade "+ velocidadeMadeira) //se não for nenhum dos blocos listados acima




//DESAFIO 2
const danoEspada = 6 //dano base
const forcaEncantamento = 1.5 //multiplicador
const armaduraInimiga = 2 //redução de dano
let vidaInimiga = 20 //pontos de vida do Creeper

const danoBruto = danoEspada * forcaEncantamento //criando a variável do dano bruto que a espada causará
const danoFinal = danoBruto - armaduraInimiga //criando a variável do dano final, considerando a armadura inimiga

vidaInimiga -= danoFinal //causando o dano na vida do inimigo

if (vidaInimiga <= 0) { //usando o if/else para definir se o usuário conseguiu derrotar o creeper
    console.log ('O Creeper foi derrotado! Você sobreviveu à explosão!') 
} else 
    console.log ('O Creeper ainda está vivo com ' + vidaInimiga +' de vida. Corra!')



//DESAFIO 3
const temDiamantes = true //definindo se o usuário tem diamantes ou não
let nivelMesaCrafting = 2 //definindo o nível da mesa de crafting
const temGravetos = false //definindo se o usuário tem gravetos
let quantidadeFerro = 10 //definindo a quantidade de ferro que o usuário tem

if (nivelMesaCrafting <3 || !temGravetos && temDiamantes && quantidadeFerro >= 8) {
    console.log ('Picareta de Diamante criada! Hora de buscar Obsidiana!') //usando o AND (&&) e OR (||) para definir se o usuário pode ou não criar a ferramenta
} else 
    console.log ('Faltam recursos ou as condiçoes de crafting não são atendidas!')
    