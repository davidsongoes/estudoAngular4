import {ConcessionariaInterface} from './ConcessionariaInterface'
import Carro from './Carro'
export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string{
        return 'De Seg a Sex das 08h às 18h e Sab das 08h às 12h'
    }
}