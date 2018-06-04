import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'nome_completo': new FormControl(null, [Validators.required]),
    'nome_usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required])

  })

  constructor() { }

  ngOnInit() {
  }

  public ExibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void {
    console.log(this.formulario)
  }
}
