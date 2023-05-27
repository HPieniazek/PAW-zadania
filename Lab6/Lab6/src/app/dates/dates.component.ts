import { Component } from '@angular/core';
import { Observable, concatMap, delay, map, of, pipe, take, timer } from 'rxjs';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent {
  dates$!: Observable<any>;
   
  ngOnInit() {
    const startDate = new Date();

    this.dates$ = of(...Array(10).keys())
      .pipe(
        map(days => {
          const date = new Date(startDate.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        }),
        concatMap(date => timer(1000).pipe(map(() => date)))
      );
  }
}
