import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, of } from 'rxjs';
import { TranslatePipe } from '../i18n/translate.pipe';
import { Technology } from '../interfaces/technology.interface';
import { KnownTechnologiesService } from '../Services/known-technologies-service.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'known-technologies',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './known-technologies.component.html',
  styleUrls: ['./known-technologies.component.scss'],
})
export class KnownTechnologiesComponent {
  private readonly service = inject(KnownTechnologiesService);

  readonly backendData = toSignal(this.safe(this.service.getBackend(), 'backend technologies'), {
    initialValue: [] as Technology[],
  });
  readonly frontendData = toSignal(this.safe(this.service.getFrontEnd(), 'frontend technologies'), {
    initialValue: [] as Technology[],
  });
  readonly aiData = toSignal(this.safe(this.service.getAi(), 'AI skills'), {
    initialValue: [] as Technology[],
  });
  readonly utilitariesData = toSignal(this.safe(this.service.getUtilitaries(), 'utilities'), {
    initialValue: [] as Technology[],
  });

  readonly groups = computed(() => [
    { titleKey: 'skills.groups.backend', icon: 'bi-server', items: this.backendData() },
    { titleKey: 'skills.groups.frontend', icon: 'bi-window-stack', items: this.frontendData() },
    { titleKey: 'skills.groups.ai', icon: 'bi-robot', items: this.aiData() },
    { titleKey: 'skills.groups.utilitaries', icon: 'bi-tools', items: this.utilitariesData() },
  ]);

  private safe(source: Observable<Technology[]>, label: string): Observable<Technology[]> {
    return source.pipe(
      catchError((error: Error) => {
        console.error(`Error loading ${label}:`, error);
        return of([] as Technology[]);
      }),
    );
  }
}
