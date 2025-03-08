import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  stringOfList: string[] = ['Mark', 'hanry', 'steve', 'clive'];

  searchText: string = '';
  onSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
