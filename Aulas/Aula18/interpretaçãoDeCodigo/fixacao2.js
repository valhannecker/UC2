const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} //os tres pontos antes do objeto indicam espalhamento (copia o objeto após os tres pontos)

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log (cachorro) //será impresso o objeto cachorro (Juca, 3 anos, SRD)
console.log(gato) //será impresso o objeto gato (Juba, 3 anos, SRD)
console.log(tartaruga) //será impresso o objeto tartaruga (Jubo , 3 anos, SRD)