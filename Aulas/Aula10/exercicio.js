let frase = prompt("Escreva uma frase:")
fraseMaiuscula = frase.toUpperCase ()
console.log ("sua frase em maiúsculo:", fraseMaiuscula)

linguaDoI = frase.replaceAll ("o", "i")
console.log ("sua frase na lingua do I é:", linguaDoI)

tamanhoFrase = frase.length
console.log ("o tamanho da sua frase é:", tamanhoFrase)

//ARRAYS 
const listaDeCompras = ["abacate", "banana", "tomate"]
console.log (listaDeCompras[1])

//exercicio
const gatosRaca = ["Siamês", "Persa", "Mainecoon", "Angorá", "Sphynx"]
let numeroRaca = Number (prompt("Digite um número para receber uma raça de gato"))
console.log("A raça de gato é:", gatosRaca[numeroRaca])

//exemplo lenght
const pokemon = ["bulbassaur", "squirtle", "charmander", "joltik"]
console.log(pokemon.length)

//exemplo includes
const seriesBoas = ["House", "How I met your mother", "Dexter"]
console.log (seriesBoas.includes ("House"))
console.log (seriesBoas.includes ("GOT"))

//exemplo push
const numeros = [1, 2, 3]
numeros.push (4)
console.log (numeros)

numeros.push (5, 6, 7) //adicionando mais de um valor com apenas um push
console.log (numeros)

//exemplos pop
const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)


//exemplo splice 
//o metodo splice (i,n)
const letras = ["A","B", "C", "D","E", "F", "G", "H"]
// indices (i)   0,  1,  2,   3,   4,   5,   6,   7

letras.splice(2, 1) // AB DEFGH

//exercicio array

const numeros2 = [1, 2, 3, 4, 5, 6]
console.log ("o tamanho da array é:", numeros2.length)

numeros2.push (7)

numeros2.splice (3, 2)
console.log(numeros2)

console.log ("o novo tamanho da array é:", numeros2.length)