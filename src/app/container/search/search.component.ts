import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  //1.create an Event

  @Output()
  SearchTextChanged = new EventEmitter<string>();

  updateSearchText(ele: HTMLInputElement) {
    this.searchText = ele.value;
    this.SearchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {}
}
