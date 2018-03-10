
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'




// criar carros

let carroA = new Carro('Palio', 4)
let carroB = new Carro('Punto', 4)
let carroC = new Carro('I30', 4)

// montar a lista de carros da concessionaria

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Cidade do Automóvel', listaDeCarros)

// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())

// comprar o carro
let cliente = new Pessoa('Davidson', 'I30')

// console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        // comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

