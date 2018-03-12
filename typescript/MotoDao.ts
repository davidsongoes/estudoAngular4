import {DaoInterface} from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface{

    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('lógica de Insert')
        return true
    }

    atualizar(object: Moto): boolean{
        console.log('lógica update')
        return true
    }

    remover(id: number): Moto{
        console.log('lógica delete')
        return new Moto()
    }

    selecionar(id: number): Moto{
        console.log('lógica select')
        return new Moto()
    }

    selecionarTodos(): [Moto]{
        console.log('lógica getAll')
        return [new Moto()]
    }
}