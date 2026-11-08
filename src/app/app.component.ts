import { Component, HostListener, inject, signal } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { I18nService } from './i18n/i18n.service';
import { TranslatePipe } from './i18n/translate.pipe';
import { KnownTechnologiesComponent } from './known-technologies/known-technologies.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { WorksComponent } from './works/works.component';

@Component({
  selector: 'app-root',
  imports: [
    FirstPageComponent,
    WhoIAmComponent,
    ExperienceComponent,
    KnownTechnologiesComponent,
    WorksComponent,
    ContactComponent,
    TranslatePipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly i18n = inject(I18nService);

  readonly links = ['about', 'experience', 'technologies', 'works', 'contact'];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
