import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // Removal : error red.directive.spec.ts

  @HostListener('mouseenter') onMouseEnter() {
    //this.highlight('red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    //this.highlight('');
  }

  private highlight(color: string) {
    //this.el.nativeElement.style.backgroundColor = color;
    //this.el.nativeElement.style.borderColor = color;
    //this.el.nativeElement.style.color = "white";
  }

  Elem= ElementRef;
  constructor(/*private el: ElementRef*/){}

}
