import { Component } from '@angular/core';
import { TranslatePipe } from '../i18n/translate.pipe';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'who-i-am',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.scss'],
})
export class WhoIAmComponent {}
