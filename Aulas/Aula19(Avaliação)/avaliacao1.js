//Sistema de gerenciamento de personagens de LotR
//array de objetos contendo todas as informações sobre os personagens
let personagens = [
    {   nome:"frodo bolseiro",
        classe:"Ladino",
        nivel:8,
        HP:65,
        habilidades:["Determinação dos Hobbits", "Resistência ao Poder do Anel", "Passos Silenciosos"],
        historicoAcoes: [],
        atacar: function atacar () {
            console.log("atacou")
        },
        defender: function defender (){
            console.log ("defendeu")
        },
        usarHabilidade: function usarHabilidade (){
            console.log ("usou uma habilidaede")
        }
    },

    {nome:"samwise gamgee", classe:"Guardião", nivel: 9, HP: 80, habilidades:["Lealdade Inabalável", "Força Oculta", "Protetor do Mestre"], historicoAcoes: []},

    {nome:"gandalf, o cinzento", classe:"Mago", nivel:20, HP: 120, habilidades:["Lança de Luz", "Controle do Fogo", "Sabedoria Antiga"], historicoAcoes: []},

    {nome:"aragorn", classe:"Herói", nivel: 18, HP: 150, habilidades:["Espadachim Mestre", "Rastreamento", "Cura dos Reis"], historicoAcoes: []},

    {nome:"legolas", classe:"Arqueiro Élfico", nivel: 17, HP: 120, habilidades:["Tiro Preciso", "Agilidade Élfica", "Visão Ampliada"], historicoAcoes: []}
]

//exibindo todos os personagens
console.log("Personagens listados: \n", personagens)

//CORREÇÃO
function listarPersonagens (){
    for (let personagem of personagens)
        console.log(personagem)
}


//buscando personagem correspondente ao digitado no prompt
const nomeParaBuscar = prompt("Digite o personagem que realizará a ação:");
const objetoEncontrado = personagens.find(personagem => personagem.nome === nomeParaBuscar); //arrow function

if (objetoEncontrado) {
  console.log("Personaem encontrado:", objetoEncontrado);
} else {
  console.log("Personagem não encontrado.");
}

//fazendo com que o personagem escolhido realize uma ação com o switch case
const acaoDesejada = prompt(`Que ação você deseja que o personagem ${objetoEncontrado.nome} realize?(atacar, defender ou habilidade)`)
switch (acaoDesejada) {
    case 'atacar':
        console.log (`O personagem ${objetoEncontrado.nome} atacou o inimigo com um golpe fatal!`)
        objetoEncontrado.historicoAcoes.push("atacou")
        console.log (objetoEncontrado.historicoAcoes)
        break
    case 'defender':
        console.log (`O personagem ${objetoEncontrado.nome} se defendeu do ataque inimigo!`)
        objetoEncontrado.historicoAcoes.push("defendeu")
        console.log (objetoEncontrado.historicoAcoes)
        break
    case 'habilidade':
        console.log (`O personagem ${objetoEncontrado.nome} usou uma de suas habilidades em combate!`)
        objetoEncontrado.historicoAcoes.push("usou uma habilidade")
        console.log (objetoEncontrado.historicoAcoes) //inserindo a ação no histórico de ações
        break
    default :
    console.log ("Ação não encontrada.")
    break
}


//imprimindo o status dos personagens utilizando o for
for(let i = 0 ; i < 5; i++) { 
    console.log (`O personagem ${personagens[i].nome} tem ${personagens[i].HP} pontos de vida e as habilidades: ${personagens[i].habilidades}`)
}


//excluindo um personagem do array com o método splice
const excluir = prompt("Digite um personagem para excluir");

function excluirPersonagens(personagens, nome) {
    const indice = personagens.findIndex(p => p.nome === nome); //arrow function
    // O findIndex() retorna o índice do primeiro elemento em um array que satisfaz a função de teste fornecida. Se nenhum elemento satisfizer a função de teste, -1 é retornado.

    if (indice !== -1) {
        personagens.splice(indice, 1);
        console.log(`Personagem "${nome}" excluído com sucesso!`);
    } else {
        console.log(`Personagem "${nome}" não encontrado!`);
    }
}
excluirPersonagens(personagens, excluir);
console.log(personagens);

