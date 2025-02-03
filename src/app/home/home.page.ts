import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  goToCheckout() {
    // Perform some actions here
    console.log('Performing some actions before redirecting...');
    // Redirect to /checkout page

    window.location.href = '/checkout';

  }
}
