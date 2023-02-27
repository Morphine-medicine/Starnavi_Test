import { Pipe, PipeTransform } from '@angular/core';
import { Square } from '../services/squares-service.service';

export interface SquarePosition{
  row: number,
  column: number
}

@Pipe({
  name: 'hoveredSquares'
})
export class HoveredSquaresPipe implements PipeTransform {

  transform(value: Square[][]): SquarePosition[]  {

    return value?.reduce((acc : SquarePosition[], row: Square[], rowNumber) => {
      const rowInfo: SquarePosition[] = [];
      row.forEach((square: Square, index) => {
        if (square.state === 'hover'){
          rowInfo.push({
            row: rowNumber + 1,
            column: index + 1
          })
        }
      });
      return [...acc, ...rowInfo]
    }, []);
  }

}
