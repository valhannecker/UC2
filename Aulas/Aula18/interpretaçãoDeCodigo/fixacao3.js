function minhaFuncao (objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) //undefined, porque a chave altura não foi definida no objeto
