//interpretação de código 1.
let valor = 0
for(let i = 0 ; i < 5; i++) { //o loop itera 5 vezes, começando no zero e a cada loop adiciona +1
    valor += i //a cada loop o valor de i é adicionado à variável valor
}
console.log(valor) //é exibido o valor da soma de todos os números

//interpretação de código 2.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero) //a) serão impressos os números maiores que  18 (19, 21, 23, 25, 27, 30)
    }
} //b) não é possível acessar o índice através do for of sozinho

//interpretação de código 3.
const quantidadeTotal = Number(prompt('DIgite a quantidade de linhas: '))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
     let linha = ""
     for (let asteriscos =  0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*" //a cada linha é adicionado mais um asterisco
     }
console.log (linha)
quantidadeAtual ++
} //será impresso:
//*
//**
//***
//****
