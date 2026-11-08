import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { TranslatePipe } from '../i18n/translate.pipe';
import { Project } from '../interfaces/project.interface';
import { WorksService } from '../Services/works-service.service';
import { RevealDirective } from '../shared/reveal.directive';

type StackFilter = 'backend' | 'frontend';

@Component({
  selector: 'works',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  private readonly service = inject(WorksService);

  readonly filters: { id: StackFilter; labelKey: string }[] = [
    { id: 'backend', labelKey: 'works.filters.backend' },
    { id: 'frontend', labelKey: 'works.filters.frontend' },
  ];

  readonly activeFilter = signal<StackFilter | null>(null);

  private readonly projects = toSignal(
    this.service.getProjects().pipe(
      catchError((error: Error) => {
        console.error('Error loading projects:', error);
        return of([] as Project[]);
      }),
    ),
    { initialValue: [] as Project[] },
  );

  readonly displayedProjects = computed(() => {
    const filter = this.activeFilter();
    const all = this.projects();
    return filter ? all.filter((project) => project.stacks.includes(filter)) : all;
  });

  toggleFilter(filter: StackFilter): void {
    this.activeFilter.update((current) => (current === filter ? null : filter));
  }
}
