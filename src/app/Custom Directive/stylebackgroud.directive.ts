import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class StyleBackground implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#36454f';
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#36454f'
    );
  }
}
