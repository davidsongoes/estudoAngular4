// import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

// import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa'

// import { CarroDao } from './CarroDao'
import Carro from './Carro'

// import { MotoDao } from './MotoDao'
import Moto from './Moto'

// import { VeiculoDao } from './VeiculoDao'
import Veiculo from './Veiculo'

// let dao: ConcessionariaDao = new ConcessionariaDao
let concessionaria = new Concessionaria('',[])


// let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('','')


// let dao3: CarroDao = new CarroDao()
let carro: Carro = new Carro('',0)


// let dao4: MotoDao = new MotoDao()
let moto: Moto = new Moto()


// let dao5: VeiculoDao = new VeiculoDao()
let veiculo: Veiculo = new Veiculo()

import {Dao} from './Dao'

let dao6: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao7: Dao<Pessoa> = new Dao<Pessoa>();
let dao8: Dao<Carro> = new Dao<Carro>();
let dao9: Dao<Moto> = new Dao<Moto>();
let dao10: Dao<Veiculo> = new Dao<Veiculo>();
dao6.atualizar(concessionaria)
dao7.inserir(pessoa)
dao8.atualizar(carro)
dao9.remover(5)
dao10 .atualizar(veiculo)
