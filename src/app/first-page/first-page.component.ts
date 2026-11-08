import { Component } from '@angular/core';
import { TranslatePipe } from '../i18n/translate.pipe';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'first-page',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {}
