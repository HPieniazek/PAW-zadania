import { Component } from '@angular/core';
import { Observable, Subscriber, interval, noop, of, timer } from 'rxjs';
import { filter, map, take, find, zip, delay, concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-warm-up',
  templateUrl: './warm-up.component.html',
  styleUrls: ['./warm-up.component.scss']
})
export class WarmUpComponent {

  numbers$!: Observable<number>;
  firstFiveNumbers$!: Observable<number>;
  eight$!: Observable<number>;
  numberLabels$!: Observable<string>;

  ngOnInit() {
    
    const delayedNumbers = (source$: Observable<number>) => source$.pipe(
      concatMap(num => of(num).pipe(delay(3000)))
    );

    const source$ = of(...Array(20).keys()).pipe(
      map(num => num + 1)
    );

    this.numbers$ = source$.pipe(
      filter(num => num % 2 === 0),
      delayedNumbers
    );

    this.firstFiveNumbers$ = source$.pipe(
      take(5),
      delayedNumbers
    );

    this.eight$ = source$.pipe(
      find(num => num === 8),
      delay(3000) // add a delay once since this emits a single value
    );

    this.numberLabels$ = source$.pipe(
      map(num => `Liczba ${num}`),
      concatMap(label => of(label).pipe(delay(3000)))
    );
  }
}
