import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model'
import { Subject } from 'rxjs/Subject';
import '../util/rxjs-extensions'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOFertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Oferta[]>([])
      })
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}