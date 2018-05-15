import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OfertasService {

    constructor(private http: Http) { }

    public getOfertas(): Promise<Array<Oferta>> {
        // Efetuar uma requisição http 
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((response: Response) => response.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((response: Response) => response.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
       return this.http.get(`${URL_API}/ofertas?id=${id}`)
       .toPromise()
       .then((response: Response) => {
            return response.json()[0]
       })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((response: Response) => {
            return response.json()[0].descricao
        })
    }

    public getOndeFicarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((response: Response) => {
            return response.json()[0].descricao
        })
    }

    public pesquisaOFertas(termo: string) : Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10)
        .map((response: Response) => response.json())
    }
}