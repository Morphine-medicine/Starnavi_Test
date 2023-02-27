import { Component, OnInit } from '@angular/core';
import { ApiService, Mode } from './services/api-service.service';
import { SquaresService } from './services/squares-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Starnavi-test-app';

  constructor(readonly apiService : ApiService, readonly squaresService: SquaresService){
    this.apiService.fetchGameModes();
  }

  onModeSelected(mode: Mode) {
    this.squaresService.initializeSquares(mode.field);
  }

}
