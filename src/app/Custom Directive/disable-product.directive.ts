import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DisableProduct]',
})
export class DisableProductDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}



  @Input() set DisableProduct(value: boolean) {
    if (value) {
      this.renderer.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
