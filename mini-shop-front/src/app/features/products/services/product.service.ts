import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [];
  protected API_MINISHOP : string = "http://localhost:3000"
  constructor() { }

  async getProducts() : Promise<Product[]> {
    const response = await fetch(`${this.API_MINISHOP}/products`);
    this.products = await response.json();
    return this.products;
  }
}
