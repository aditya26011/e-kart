import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor = '#28282B';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.color') textcolor = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.textcolor = '#28282B';
    this.border = '#28282B 3px solid';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#28282B';
    this.border = 'none';
    this.textcolor = 'white';
  }
}
