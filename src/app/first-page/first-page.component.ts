import { Component, Input } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  @Input() isVisible: boolean = false;
}
