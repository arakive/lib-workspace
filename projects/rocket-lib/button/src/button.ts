import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'button[rocket-button]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.css'],
  host: {
    class: 'border-gradient',
  },
})
export class RocketButton {
  private el = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.el.nativeElement.style.setProperty('--mouse-x', `${x}px`);
    this.el.nativeElement.style.setProperty('--mouse-y', `${y}px`);
  }
}
