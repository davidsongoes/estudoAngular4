import { Http} from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    constructor(private http: Http){}

    public getOfertas(): Promise<Array<Oferta>> {
        // Efetuar uma requisição http 
        return this.http.get('http://localhost:3000/ofertas')
        .toPromise()
        .then((response: any) => response.json())
    }
}