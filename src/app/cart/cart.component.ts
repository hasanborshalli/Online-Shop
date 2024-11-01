import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  constructor(public cs: CartService) {}
  ngOnInit(): void {
    this.cartItems = this.cs.getCartItems();
    this.cartItems.forEach((item) => {
      this.total += item.quantity * item.price;
    });
  }
  updateQuantity(index: number, event: any) {
    let newQuantity = event.target.value;
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    this.cartItems[index].quantity = newQuantity;
    this.total = 0;
    this.cartItems.forEach((item) => {
      this.total += item.quantity * item.price;
    });
    this.cs.updateCartQuantity(index, newQuantity);
  }
  clearItems() {
    localStorage.clear();
    window.location.reload();
  }
  removeItem(index: number): void {
    let items = this.cs.getCartItems();
    items.splice(index, 1);
    this.cs.setCartItems(items);
    window.location.reload();
  }
}
