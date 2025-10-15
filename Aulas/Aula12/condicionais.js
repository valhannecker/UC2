let condicao1 = true
if (condicao1){
    //como o valor é true, o código é executado
    console.log ("Entrei no if1")
}


let condicao2 = false
if (condicao2){
    //como o valor é false, o código n é executado
    console.log ("Entrei no if2")
}

//exemplo dois
condicao1 = true
condicao2 = true
let condicao3 = true

if (condicao1){
    console.log ("Entrou no if1")
} 
else if (condicao2) {
    console.log ("Entrou no else if 1")
}
else if (condicao3) {
    console.log ("Entrou no else if 2")
}
else 
    console.log ("Entrou no else")