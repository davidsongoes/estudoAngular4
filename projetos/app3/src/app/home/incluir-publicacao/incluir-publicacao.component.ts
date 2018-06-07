import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { BdService } from '../../bd.service';
import { ProgressoService } from '../../progresso.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string
  private imagem: any

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private bdService: BdService,
    private progressoService: ProgressoService
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })

  }

  public publicar(): void {
    this.bdService.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem
    })
    console.log(this.progressoService.status)
    console.log(this.progressoService.status)
  }

  public preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files[0]
  }

}
