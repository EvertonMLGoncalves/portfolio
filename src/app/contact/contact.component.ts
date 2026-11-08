import { Component } from '@angular/core';
import { TranslatePipe } from '../i18n/translate.pipe';
import { RevealDirective } from '../shared/reveal.directive';

interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'contact',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly currentYear = new Date().getFullYear();

  readonly links: ContactLink[] = [
    {
      icon: 'bi-whatsapp',
      label: 'WhatsApp',
      value: '+55 (47) 99196-3768',
      href: 'https://wa.me/5547991963768',
    },
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'evertonmlgoncalves@gmail.com',
      href: 'mailto:evertonmlgoncalves@gmail.com',
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: 'Everton Mikey Litka Gonçalves',
      href: 'https://www.linkedin.com/in/everton-mikey-litka-gonçalves',
    },
    {
      icon: 'bi-github',
      label: 'GitHub',
      value: 'EvertonMLGoncalves',
      href: 'https://github.com/EvertonMLGoncalves',
    },
  ];
}
