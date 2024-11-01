import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItems';
  constructor() {}
  getCartItems() {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }
  setCartItems(items: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
  updateCartQuantity(index: number, quantity: number) {
    const items = this.getCartItems();
    if (items[index]) {
      items[index].quantity = quantity;
      this.setCartItems(items);
    }
  }
}
