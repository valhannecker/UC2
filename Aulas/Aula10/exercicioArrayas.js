//a. undefined
//b. null
//c. 11
//d. 3 
//e. 3 19 5 6 7 8 9 10 11 12 13
//f. 9

//2. SUBI NUM ONIBUS EM MIRROCOS

//3.
let email = prompt("Digite seu email:")
let nomeUsuario = prompt("Digite seu nome de usuário:")

const fraseEmail = "O e-mail" + email.trim() + " foi cadastrado com sucesso. Seja bem vindo(a) " + nomeUsuario.trim()
console.log (fraseEmail)

//4. atv comidas favoritas
let array = ["risoto", "pão de queijo", "chocolate", "arroz e feijão com farofa", "batata"]
console.log (array)
console.log ("Essas são minhas comidas favoritas:")
console.log (array [0]) //imprimindo cada comida individualmente
console.log (array [1])
console.log (array [2])
console.log (array [3])
console.log (array [4])

let novaComida = prompt("qual sua comida favorita?")
array[1] = novaComida
console.log ("a nova lista de comidas favoritas é:", array)

//atividade lista de tarefas
let listaDeTarefas = []
let instrucao1 = prompt("digite a primeira tarefa")
let instrucao2 = prompt("digite a segunda tarefa")
let instrucao3 = prompt("digite a terceira tarefa")

listaDeTarefas.push (instrucao1, instrucao2, instrucao3)

let instrucao = Number(prompt("Digite o indice da instrução já realizada (0, 1, 2)"))
listaDeTarefas.splice(instrucao, 1)

console.log ("as tarefas pendentes são:", listaDeTarefas) 

//desafio
let frase = prompt("Digite uma frase")
let palavra = frase.split (" ")

console.log (palavra)

//desafio2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indice = frutas.indexOf ("Abacaxi")
let tamanho = frutas.length
console.log("O índice do abacaxi é", indice, "e o comprimento da array é", tamanho)