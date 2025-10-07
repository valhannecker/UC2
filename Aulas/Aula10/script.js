let nome = "Valentina"
const idade = 17

const frase = "O meu nome é " + nome + " e minha idade é " + idade
console.log (frase)
console.log (typeof frase)

const fraseTemplate = `o meu nome é ${nome} e minha idade é ${idade}`
console.log (fraseTemplate)
console.log (typeof fraseTemplate)


nome = prompt("Digite o seu nome:")
let cor = prompt("Digite sua cor favorita:")
const fraseNomeCor = "O seu nome é " + nome + " e sua cor favorita é " + cor //usando aspas simples ou duplas
const fraseCorTemplate = `O seu nome é ${nome} e sua cor favorita é ${cor}` //usando template (crase)
console.log (fraseNomeCor)
console.log (fraseCorTemplate)

console.log (nome.length)

const fraseMaiuscula = "OieEEeEeE"
const fraseMinuscula = fraseMaiuscula.toLowerCase() //usando o método toLowerCase para deixar todos os caracteres em minusculos
console.log (fraseMaiuscula, fraseMinuscula)

const fraseUpper = fraseMaiuscula.toUpperCase() //método toUpperCase
console.log(fraseMaiuscula, fraseUpper)

console.log (nome.trim()) //método trim (tira os espaços no inicio e no fim)

const fraseCenoura = "hoje comi cenoura, adoro cenoura"
console.log (fraseCenoura.includes ("cenoura")) //true
console.log (fraseCenoura.includes ("batata")) //false
//o método includes verifica se o strng esta presente na variavel

const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase) //replaceAll substitui um valorr strig por outro

