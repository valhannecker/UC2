const pessoa = {
    nome: "Valentina Locatelli",
    apelido: ["Val", "Valen", "Valentão"]
}

function escreverNome (objeto) {
    console.log (`Eu sou a ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
}

escreverNome (pessoa)

const pessoa2 = {
    ...pessoa
    
}