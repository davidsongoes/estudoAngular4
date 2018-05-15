import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/observable/of'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((termo: string) => {
      console.log('Requisição http para api')
      if(termo.trim() === ''){
        return Observable.of<Oferta[]>([])
      }
      return this.ofertasService.pesquisaOFertas(termo)
    })
    .catch((err: any) => {
      console.log(err)
      return Observable.of<Oferta[]>([])
    })
    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertas2 = ofertas)
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('KeyUp caracter: ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }
}
