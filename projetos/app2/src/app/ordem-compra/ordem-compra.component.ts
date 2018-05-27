import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  // Atributos de controle
  public enderecoValido: boolean
  public complementoValido: boolean
  public numeroValido: boolean
  public formaPagamentoValido: boolean

  // Atributos estados primitivos dos campos (pristine state)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true
  
  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    this.enderecoEstadoPrimitivo = false

    // console.log(this.endereco)
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    this.numeroEstadoPrimitivo = false
    // console.log(this.numero)
    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    this.complementoEstadoPrimitivo = false
    // console.log(this.complemento)
    if (this.complemento.length > 0) {
      this.complementoValido = true
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    // console.log(this.formaPagamento)
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
  }


}
