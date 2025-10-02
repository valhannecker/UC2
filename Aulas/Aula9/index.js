// exemplo
const interruptor1 = true
const interruptor2 = true

let resultado =interruptor1 && interruptor2
console.log(resultado)

//exericicio um (AND &&)
let a = true
let b = false
let c = true

resultado = a && b
console.log (resultado) //false

resultado = b && c
console.log (resultado) //false

resultado = a && c
console.log (resultado) //true

resultado = a && b && c
console.log (resultado) //false


//exercicio dois (OR ||)
resultado = interruptor1 || interruptor2
console.log (resultado) //true

resultado = a || b
console.log (resultado) //true

resultado = b || c
console.log (resultado) //true

resultado = a || c
console.log (resultado) //true

resultado = a || b || c
console.log (resultado) //true


//exercicio 3 (NOT !)
resultado = ! interruptor1
console.log (resultado)

resultado = ! interruptor2
console.log = (resultado)