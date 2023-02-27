import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode } from '../../services/api-service.service';

@Component({
  selector: 'app-mode-picker',
  templateUrl: './mode-picker.component.html',
  styleUrls: ['./mode-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModePickerComponent {
  @Input()
  availableModes: Mode[] = [];

  @Output()
  onModeSelected = new EventEmitter<Mode>();

  selectedMode: Mode = null;

  onStart(){
    this.onModeSelected.emit(this.selectedMode);
  }

}
