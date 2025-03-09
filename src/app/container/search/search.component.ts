import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

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

  //Need a selector as 1st argu which can be string value,a comp name or directive name
  //2nd argu optional can be a: static: Determine when the query is resolved
  //        true: is when the view is initialized (before the first change detection) for the first time.
  //        false:if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {}
}
