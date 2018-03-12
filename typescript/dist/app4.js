"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// import {ConcessionariaDao} from './ConcessionariaDao'
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// import { PessoaDao } from './PessoaDao';
var Pessoa_1 = __importDefault(require("./Pessoa"));
// import { CarroDao } from './CarroDao'
var Carro_1 = __importDefault(require("./Carro"));
// import { MotoDao } from './MotoDao'
var Moto_1 = __importDefault(require("./Moto"));
// import { VeiculoDao } from './VeiculoDao'
var Veiculo_1 = __importDefault(require("./Veiculo"));
// let dao: ConcessionariaDao = new ConcessionariaDao
var concessionaria = new Concessionaria_1.default('', []);
// let dao2: PessoaDao = new PessoaDao()
var pessoa = new Pessoa_1.default('', '');
// let dao3: CarroDao = new CarroDao()
var carro = new Carro_1.default('', 0);
// let dao4: MotoDao = new MotoDao()
var moto = new Moto_1.default();
// let dao5: VeiculoDao = new VeiculoDao()
var veiculo = new Veiculo_1.default();
var Dao_1 = require("./Dao");
var dao6 = new Dao_1.Dao();
var dao7 = new Dao_1.Dao();
var dao8 = new Dao_1.Dao();
var dao9 = new Dao_1.Dao();
var dao10 = new Dao_1.Dao();
dao6.atualizar(concessionaria);
dao7.inserir(pessoa);
dao8.atualizar(carro);
dao9.remover(5);
dao10.atualizar(veiculo);
