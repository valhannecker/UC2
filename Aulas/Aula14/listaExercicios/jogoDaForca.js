const palavras = ["abelha", "caminho", 'girafa', 'abacate', 'garrafa', 'janela', 'caderno', 'caneta']
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]

// Cria um array com "_" para representar as letras não adivinhadas
let palavraAdivinhada = Array(palavraSecreta.length).fill("_");
let tentativasRestantes = 10
let letrasTentadas = []

while (tentativasRestantes > 0 && palavraAdivinhada.includes("_")) {
    console.log (`Palavra: ${palavraAdivinhada}`)
    console.log (`Tentativas restantes: ${tentativasRestantes}`)
    console.log (`Letras já tentadas: ${letrasTentadas.join(", ")}`)

let tentativa = prompt("Digite uma letra:").toLowerCase()

if (letrasTentadas.includes(tentativa)) {
    alert("Você já tentou essa letra!")
}

letrasTentadas.push(tentativa)

if (palavraSecreta.includes(tentativa)) {
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === tentativa) {
            palavraAdivinhada[i] = tentativa
        }
    }
    console.log ('A letra existe na palavra!')
} else {
    tentativasRestantes -= 1
    console.log ('Letra incorreta!')
}
}

if (!palavraAdivinhada.includes("_")) {
    console.log(` Parabéns! Você acertou a palavra: ${palavraSecreta}`)
} else {
    console.log(`Fim de jogo! A palavra era: ${palavraSecreta}`)
}