import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/Product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProducts().then((products) => this.products = products);
  }
}
