import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    private urlApi = 'http://localhost:3000/ofertas'

    constructor(private http: Http) { }

    public getOfertas(): Promise<Array<Oferta>> {
        // Efetuar uma requisição http 
        return this.http.get(`${this.urlApi}?destaque=true`)
            .toPromise()
            .then((response: any) => response.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${this.urlApi}?categoria=${categoria}`)
        .toPromise()
        .then((response: any) => response.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
       return this.http.get(`${this.urlApi}?id=${id}`)
       .toPromise()
       .then((response: any) => {
            return response.json()[0]
       })
    }
}