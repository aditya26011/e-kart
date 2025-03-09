import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  stringOfList: string[] = ['Mark', 'hanry', 'steve', 'clive'];

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  searchText: string = '';
  onSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
