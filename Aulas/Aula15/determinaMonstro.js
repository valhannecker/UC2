function determinaMonstro (temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) {
    if (temSedeDeSangue && (temPeleGelada || brilhaAoSol)) {
        console.log ("É um vampiro")
    } else if (transformaComLuaCheia) {
        console.log ("É um lobisomem")
    } else
        console.log ("É um humano")
}
eGelado = true
transforma = false
brilhaAoSol = false
temSedeDeSangue = true
let monstro1 = [true, false, false, true]
let monstro2 = [true, true, true, false]
let monstro3 = [false, true, true, true]

determinaMonstro(monstro1[0], monstro1[1], monstro1[2], monstro1[3])
determinaMonstro(monstro2[0], monstro2[1], monstro2[2], monstro2[3])
determinaMonstro(monstro3[0], monstro3[1], monstro3[2], monstro3[3])