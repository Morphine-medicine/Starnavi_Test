import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Square {
  state: 'hover' | 'default';

  constructor() {
    this.state = 'default';
  }

  changeState(newState: 'hover' | 'default') {
    this.state = newState;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SquaresService {
  private squares: Square[][] = [];

  squares$: Subject<Square[][]> = new Subject<Square[][]>()

  constructor() { }

  initializeSquares(number: Number) {
    this.squares = [];

    for (let i = 0; i < number; i++) {
      const row = []
      for (let j = 0; j < number; j++) {
        row.push(new Square());
      }
      this.squares.push(row);
    }
    this.squares$.next(this.squares);
  }

  toggleSquareState(square: Square){
    square.changeState(square.state === 'hover' ? 'default' : 'hover');
    this.squares$.next([...this.squares]);
  }

}
