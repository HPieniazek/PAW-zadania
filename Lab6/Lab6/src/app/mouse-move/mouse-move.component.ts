import { Component } from '@angular/core';
import { Observable, concatMap, debounceTime, delay, filter, fromEvent, map, of, pipe, take, timer } from 'rxjs';

@Component({
  selector: 'app-mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.scss']
})
export class MouseMoveComponent {
  mouseOnClick$! : Observable<any>;
  mouseInterval$! : Observable<any>;
  mousePosition$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map(event => ({ x: event.clientX, y: event.clientY })),
    filter(pos => pos.x > 500),
    debounceTime(2000),
  );
  ngOnInit() {
    const sourceClick = fromEvent<MouseEvent>(document, 'click');
    const sourceMove = fromEvent<MouseEvent>(document, 'mousemove');
    
    this.mouseOnClick$ = sourceClick.pipe(
      map( (event: any) => 
        'x:'+ event.clientX +
        ' y:' + event.clientY
        ),
      
      );


    this.mouseInterval$ = sourceMove.pipe(
        map((event: MouseEvent) => 'x:'+ event.clientX + ' y:' + event.clientY),
        debounceTime(200),
      )

  }
}
