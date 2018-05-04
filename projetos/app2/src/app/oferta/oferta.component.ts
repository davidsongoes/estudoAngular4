import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx'
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        // console.log(this.oferta)
      })

    //  this.route.params.subscribe((parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('Processamento foi classificado como concluído!')
    //   )

    // let tempo = Observable.interval(2000)

    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo)
    // })

    // Observable(Observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.error('Algum erro foi encotrado na stream de eventos')
    })
    // Observable(Observador)
    meuObservableTeste.subscribe(
      (response: number) => console.log(response + 10),
      (error: string) => console.log(error) ,
      () => console.log('Stream de eventos foi finalizada')
    )
  }
}
