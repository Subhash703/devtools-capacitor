import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 1, description: 'Awesome product description for product', quantity: 1 },
    { id: 2, name: 'Product 2', price: 1, description: 'Awesome product description for product', quantity: 1 }
  ];

  constructor(private router: Router) {}

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  goToCart() {
    console.log('Navigating to cart with:', this.products);
    this.router.navigate(['/checkout'], { state: { products: this.products } });
  }
}
