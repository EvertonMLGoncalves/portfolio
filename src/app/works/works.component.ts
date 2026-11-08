import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { Project } from '../interfaces/project.interface';
import { WorksService } from '../Services/works-service.service';
import { RevealDirective } from '../shared/reveal.directive';

type StackFilter = 'backend' | 'frontend';
type SortOrder = 'newest' | 'oldest' | 'name';

@Component({
  selector: 'works',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  private readonly service = inject(WorksService);
  private readonly i18n = inject(I18nService);

  readonly filters: { id: StackFilter; labelKey: string }[] = [
    { id: 'backend', labelKey: 'works.filters.backend' },
    { id: 'frontend', labelKey: 'works.filters.frontend' },
  ];

  readonly activeStack = signal<StackFilter | null>(null);
  readonly activeTech = signal<string>('');
  readonly activeYear = signal<string>('');
  readonly sortBy = signal<SortOrder>('newest');
  readonly searchQuery = signal<string>('');

  private readonly projects = toSignal(
    this.service.getProjects().pipe(
      catchError((error: Error) => {
        console.error('Error loading projects:', error);
        return of([] as Project[]);
      }),
    ),
    { initialValue: [] as Project[] },
  );

  readonly availableTechnologies = computed(() => {
    const set = new Set<string>();
    for (const project of this.projects()) {
      for (const tech of project.technologies ?? []) {
        set.add(tech);
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  });

  readonly availableYears = computed(() => {
    const set = new Set<string>();
    for (const project of this.projects()) {
      if (project.date) {
        set.add(project.date.slice(0, 4));
      }
    }
    return Array.from(set).sort((a, b) => b.localeCompare(a));
  });

  readonly hasActiveFilters = computed(
    () =>
      this.activeStack() !== null ||
      this.activeTech() !== '' ||
      this.activeYear() !== '' ||
      this.searchQuery().trim() !== '',
  );

  readonly displayedProjects = computed(() => {
    const stack = this.activeStack();
    const tech = this.activeTech();
    const year = this.activeYear();
    const query = this.searchQuery().trim().toLowerCase();
    const sort = this.sortBy();

    const filtered = this.projects().filter((project) => {
      if (stack && !project.stacks.includes(stack)) {
        return false;
      }
      if (tech && !(project.technologies ?? []).includes(tech)) {
        return false;
      }
      if (year && !project.date?.startsWith(year)) {
        return false;
      }
      if (query) {
        const description = this.i18n.t(`projects.${project.id}.description`).toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesTech = (project.technologies ?? []).some((t) =>
          t.toLowerCase().includes(query),
        );
        const matchesDesc = description.includes(query);
        if (!matchesName && !matchesTech && !matchesDesc) {
          return false;
        }
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      }
      const cmp = (a.date ?? '').localeCompare(b.date ?? '');
      return sort === 'newest' ? -cmp : cmp;
    });
  });

  setStack(stack: StackFilter | null): void {
    this.activeStack.update((current) => (current === stack ? null : stack));
  }

  onTechChange(event: Event): void {
    this.activeTech.set((event.target as HTMLSelectElement).value);
  }

  onYearChange(event: Event): void {
    this.activeYear.set((event.target as HTMLSelectElement).value);
  }

  onSortChange(event: Event): void {
    this.sortBy.set((event.target as HTMLSelectElement).value as SortOrder);
  }

  onSearchInput(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  clearFilters(): void {
    this.activeStack.set(null);
    this.activeTech.set('');
    this.activeYear.set('');
    this.searchQuery.set('');
  }

  formatDate(value: string): string {
    if (!value) {
      return '';
    }
    const [year, month] = value.split('-').map(Number);
    const date = new Date(year, (month || 1) - 1, 1);
    return new Intl.DateTimeFormat(this.i18n.locale, {
      month: 'short',
      year: 'numeric',
    }).format(date);
  }
}
