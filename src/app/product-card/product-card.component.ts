import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  constructor(public cs: CartService, public route: Router) {}
  @Input() item: any;
  addItem(item: any) {
    let items = this.cs.getCartItems();
    let itemExist = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items[i].quantity++;
        itemExist = true;
        break;
      }
    }
    if (!itemExist) {
      items.push(item);
    }
    this.cs.setCartItems(items);
    this.route.navigate(['/cart']);
  }
}
