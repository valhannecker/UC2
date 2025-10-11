let descricao = prompt ("Escreva uma frase descrevendo seu look")
let corPrincipal = prompt ("Qual é a cor em destaque do seu look?")

tamanhoDescricao = descricao.length
let temTamanhoAdequado = tamanhoDescricao >= 20

descricao.toLowerCase ()
descricao.indexOf ("brilho", "listras")
let temBrilho = descricao.indexOf ("brilho") !== -1
let temListras = descricao.indexOf ("listras") !== -1

let lookAprovado = temTamanhoAdequado&& (temBrilho || temListras)