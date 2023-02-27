import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModePickerComponent } from './components/mode-picker/mode-picker.component';
import { HoverSquaresListComponent } from './components/hover-squares-list/hover-squares-list.component';
import { SquaresContainerComponent } from './components/squares-container/squares-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HoverDirective } from './directives/hover.directive';
import { HoveredSquaresPipe } from './pipes/hovered-squares.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModePickerComponent,
    HoverSquaresListComponent,
    SquaresContainerComponent,
    HoverDirective,
    HoveredSquaresPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
