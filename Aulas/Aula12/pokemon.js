let pokemonEscolhido = prompt("Escolha um pokémon inicial da primeira geração")
switch (pokemonEscolhido.toLowerCase()) {
    case 'bulbasaur':
        console.log ("Tipo planta e veneno.")
        break
    case 'charmander':
        console.log ("Tipo fogo.")
        break
    case 'squirtle':
        console.log ("Tipo água")
        break
    default:
        console.log ("Pokemón não encontrado")
}
