import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [];
  protected API_MINISHOP : string = environment.apiUrl
  constructor() { }

  async getProducts() : Promise<Product[]> {
    const response = await fetch(`${this.API_MINISHOP}/products`);
    this.products = await response.json();
    return this.products;
  }
}
