import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, debounceTime, filter, fromEvent, map, scan } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @ViewChild('searchBox') searchBox!: ElementRef;

  searchHistory$!: Observable<string[]>;

  ngAfterViewInit() {
    this.searchHistory$ = fromEvent<any>(this.searchBox.nativeElement, 'input').pipe(
      map(event => event.target.value), 
      debounceTime(300), 
      filter(text => text.length > 0), 
      scan((history: string[], text) => [...history, text], [])
    );

    // Subscribe to the search history
    this.searchHistory$.subscribe(history => console.log(history));
  }
}
