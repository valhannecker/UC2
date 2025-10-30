const numeroEscolhido = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log ('Vamos jogar!')
let chute
let numeroTentativas = 0
while (chute !== numeroEscolhido) {
    chute = Number(prompt ('Tente advinhar o número! (até 10)'))
    console.log ('O número chutado foi: ' + chute)
    if (chute > numeroEscolhido) {
        console.log ('Errou! O número escolhido é menor.')
    } else 
        console.log ('Errou! o número escolhido é maior.')
    numeroTentativas ++
}
console.log ('Parabéns! Você acertou, o número escolhido era ' + numeroEscolhido)
console.log ('O número de tentativas foi: '+ numeroTentativas)