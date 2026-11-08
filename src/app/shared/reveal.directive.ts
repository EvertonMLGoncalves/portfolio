import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  readonly appReveal = input<number | string>('');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.host.nativeElement;
    const delay = Number(this.appReveal());
    if (delay) {
      element.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.classList.add('revealed');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

