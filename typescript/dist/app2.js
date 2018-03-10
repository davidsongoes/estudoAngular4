"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// criar carros
var carroA = new Carro_1.default('Palio', 4);
var carroB = new Carro_1.default('Punto', 4);
var carroC = new Carro_1.default('I30', 4);
// montar a lista de carros da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Cidade do Automóvel', listaDeCarros);
// exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())
// comprar o carro
var cliente = new Pessoa_1.default('Davidson', 'I30');
// console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
