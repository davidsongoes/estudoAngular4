import {DaoInterface} from './DaoInterface'
import Veiculo from './Veiculo'

export class VeiculoDao implements DaoInterface{

    nomeTabela: string = 'tb_veiculo'

    inserir(object: Veiculo): boolean {
        console.log('lógica de Insert')
        return true
    }

    atualizar(object: Veiculo): boolean{
        console.log('lógica update')
        return true
    }

    remover(id: number): Veiculo{
        console.log('lógica delete')
        return new Veiculo()
    }

    selecionar(id: number): Veiculo{
        console.log('lógica select')
        return new Veiculo()
    }

    selecionarTodos(): [Veiculo]{
        console.log('lógica getAll')
        return [new Veiculo()]
    }
}