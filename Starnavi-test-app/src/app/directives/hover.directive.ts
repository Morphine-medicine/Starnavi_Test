import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Square, SquaresService } from '../services/squares-service.service';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @Input()
  appHover: Square = null;

  @HostListener('mouseenter') onMouseEnter() {
    if(this.appHover.state === 'default'){
      this.renderer.addClass(this.el.nativeElement, 'hover');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'hover');
    }
    this.squaresService.toggleSquareState(this.appHover);
  }
  constructor(private el: ElementRef, private squaresService: SquaresService, private renderer: Renderer2) { }


}
