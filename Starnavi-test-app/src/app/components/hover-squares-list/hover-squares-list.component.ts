import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Square } from '../../services/squares-service.service';

@Component({
  selector: 'app-hover-squares-list',
  templateUrl: './hover-squares-list.component.html',
  styleUrls: ['./hover-squares-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoverSquaresListComponent {

  @Input()
  squares: Square[][] = [];

}
