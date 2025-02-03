import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,
})
export class CheckoutPage implements OnInit {

  cartItems: CartItem[] = [
    { name: 'Product 1', quantity: 1, price: 20 },
    { name: 'Product 2', quantity: 1, price: 15 }
  ];

  taxRate: number = 0.1; // 10% tax
  totalAmount: number = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  tax: number = this.totalAmount * this.taxRate;
  totalPayable: number = this.totalAmount + this.tax;

  constructor(private router: Router) {
    console.log('CartPage loaded');
  }

  checkout() {
    console.log('Initiating Juspay Checkout...');
    // Call Juspay SDK Checkout process here
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const products = navigation.extras.state['products'];
      console.log('Products:', products);
    }
    console.log('Performing some actions before redirecting...');
  }

}
