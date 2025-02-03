import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,
})
export class CheckoutPage implements OnInit {

  constructor() {
    console.log('Performing some actions before redirecting...');
   }

  ngOnInit() {
    console.warn('Performing some actions before redirecting...');
  }

}
