//BATALHA NAVAL
let batalhaNaval = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function adicionarNavio() {
    batalhaNaval[1][3] = 3
    batalhaNaval[1][4] = 3
    batalhaNaval[1][5] = 3

    batalhaNaval[3][3] = 4
    batalhaNaval[4][3] = 4
    batalhaNaval[5][3] = 4
    batalhaNaval[6][3] = 4

    batalhaNaval[9][0] = 2
    batalhaNaval[9][1] = 2

    batalhaNaval[0][9] = 5
    batalhaNaval[1][9] = 5
    batalhaNaval[2][9] = 5
    batalhaNaval[3][9] = 5
    batalhaNaval[4][9] = 5

    batalhaNaval[7][7] = 1
}

adicionarNavio()
console.log(batalhaNaval)
numeroTentativas = 50
acertos = 0

while(numeroTentativas > 0 || acertos < 5) {
    let tentativaLinha = Number(prompt("Digite a linha desejada"))
    let indiceLinha = tentativaLinha - 1

    let tentativaColuna = Number(prompt("Digite a coluna desejada"))
    let indiceColuna = tentativaColuna - 1

    if (batalhaNaval[indiceLinha][indiceColuna] !== 0) {
        console.log(`Você achou um navio! Seu número era ${batalhaNaval[indiceLinha][indiceColuna]}`)
        acertos++
    }
    else {
        numeroTentativas--;
    }
}
