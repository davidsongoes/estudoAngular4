import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear(): void {
    this.shoppingCartService.clear()
  }

  addItem(item: any): void {
    console.log(item)
    this.shoppingCartService.addItem(item)
  }

  removeItem(item: any): void {
    this.shoppingCartService.removeItem(item)
  }
}
