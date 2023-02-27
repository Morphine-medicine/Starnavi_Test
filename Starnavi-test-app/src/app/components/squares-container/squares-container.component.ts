import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Square } from '../../services/squares-service.service';

@Component({
  selector: 'app-squares-container',
  templateUrl: './squares-container.component.html',
  styleUrls: ['./squares-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquaresContainerComponent {

  @Input()
  squares: Square[][] = [];

}
