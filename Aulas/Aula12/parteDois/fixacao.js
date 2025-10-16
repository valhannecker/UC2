//verificado se o usuário concluiu o ensino médio
let ensinoMedio = prompt("Você concluiu o ensino médio?")
let concluido = false
switch (ensinoMedio.toLowerCase()){
    case 'sim':
        concluido = true
        break
    case 'não':
        concluido = false
        break
    default:
        console.log ("Erro! responda com sim ou não.")
        break
}
//verificando se o usuário frequenta outra faculdade
let outraFaculdade = prompt("Você frequenta outra faculdade?")
let podeEntrar
switch (outraFaculdade.toLowerCase()){
    case 'sim':
        podeEntrar = false
        break
    case 'não':
        podeEntrar = true
        break
    default:
        console.log('Erro na resposta! responda com sim ou não.')
        break
}
//verificando se o usuário é maior de idade
let maiorIdade = Number (prompt("Quantos anos você tem?"))
let dezoitoMais = false
if (maiorIdade >= 18){
    dezoitoMais = true
} else
    dezoitoMais = false





if (concluido&&maiorIdade&&podeEntrar){
    console.log("Você pode estudar nesta faculdade!")
} else
    console.log("Você não pode estudar nesta faculdade")