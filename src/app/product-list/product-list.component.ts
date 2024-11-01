import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  category = [
    { id: 1, name: 'Electronics', image: 'electronics.png' },
    { id: 2, name: 'Clothes', image: 'clothes.png' },
    { id: 3, name: 'Food', image: 'food.png' },
    { id: 4, name: 'Gym', image: 'gym.png' },
  ];
  products: any[] = [];
  categoryId: any;
  selectedId: number = 0;
  filteredProducts: any[] = [];
  constructor(public ps: ProductService, public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.products = this.ps.getProducts();
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.selectedId = this.categoryId;
    if (this.categoryId) {
      this.filter(this.categoryId);
    } else {
      this.filteredProducts = this.products;
    }
  }
  filter(value: any) {
    if (value == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === value
      );
    }
    this.categoryId = null;
  }
}
