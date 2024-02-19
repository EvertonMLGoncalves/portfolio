import { Component, Input } from '@angular/core';

@Component({
  selector: 'who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.scss']
})
export class WhoIAmComponent {
  @Input() isVisible : boolean = false;   
}
