import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    name: 'iphone 13',
    price: 999,
    color: 'red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/Images/iphone.png',
  };

  onChange(event: any) {
    // console.log(event.target.value);
    // this.name = event.target.value;
  }
  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
