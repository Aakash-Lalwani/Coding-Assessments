import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * HighlightDirective - Hands-On 3, Task 3, Steps 33-34, 37
 * Custom attribute directive that highlights an element on mouseenter.
 * Uses @HostListener to bind to host element events - Angular handles cleanup.
 * Configurable color via @Input binding.
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Step 37: Configurable highlight color (default: yellow)
  @Input() appHighlight = 'yellow';

  private originalBackground = '';

  constructor(private el: ElementRef) {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;
  }

  // Step 33: @HostListener binds to host element events automatically
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = this.originalBackground;
  }
}
