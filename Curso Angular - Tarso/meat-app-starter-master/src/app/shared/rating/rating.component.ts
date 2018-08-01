import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1, 2, 3, 4, 5]

  rate: number = 0

  previuosRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number): void {
    this.rate = r
    this.previuosRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number): void {
    if (this.previuosRate === undefined) {
      this.previuosRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(): void {
    if (this.previuosRate !== undefined) {
      this.rate = this.previuosRate
      this.previuosRate = undefined
    }
  }
}
