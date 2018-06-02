import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      }))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido'

  constructor() { }

  ngOnInit() {
  }

  public toggleEstado(): void {
    if(this.estado === 'visivel'){
      this.estado = 'escondido'
    }else if(this.estado === 'escondido'){
      this.estado = 'visivel'
    }
  }

}
