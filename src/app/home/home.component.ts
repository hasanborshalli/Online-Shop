import { Component, OnInit } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  category = [
    { id: 1, name: 'Electronics', image: 'electronics.png' },
    { id: 2, name: 'Clothes', image: 'clothes.png' },
    { id: 3, name: 'Food', image: 'food.png' },
    { id: 4, name: 'Gym', image: 'gym.png' },
  ];
  products: any[] = [];
  constructor(public ps: ProductService, public route: Router) {}
  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }
  goCategory(id: any) {
    this.route.navigate(['/product', id]);
  }
}
