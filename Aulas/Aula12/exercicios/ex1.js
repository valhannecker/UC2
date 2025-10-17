//o código faz o teste se o número é positivo ou negativo
//o código irá imprimir os numeros pares
//os números ímpares não passarão no teste

//o código serve para precificar diferentes itens do mercado
//será impresso 2.25

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case 'laranja':
        preco = 3.5
        break;
    case 'maçã':
        preco = 2.25
        break;
    case 'uva':
        preco = 0.30
        break;
    case 'pera':
        preco = 5.5
 //break faltando
    default:
        preco = 5
        break;
}
console.log("o preço da fruta", fruta, "é R$", preco)
//sem o BREAK é impresso o valor 5

//3. MENSAGEM SECRETA
//a) a primeira linha está criando uma variável em que o usuário deve inserir o valor através do prompt
//b) 'Esse número passou no teste' 'essa mensagem é secreta!!'
//c) 

const numero =Number(prompt("Digite o primeiro número."))

if(numero >0) {
    console.log("Esse numero passou no teste")
    let mensagem = 'essa mensagem é secreta!!!'
}
console.log (mensagem)

//haverá erro no console, porque a variável foi declarada dentro de um bloco, então ela é visível apenas dentro dele

