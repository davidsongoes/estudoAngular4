import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service'
 
@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: OfertasService
  ) { }

  ngOnInit() {
    console.log('ID da rota Pai - Onde fica', this.route.parent.snapshot.params['id'])
  }

}
