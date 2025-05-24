import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
];
