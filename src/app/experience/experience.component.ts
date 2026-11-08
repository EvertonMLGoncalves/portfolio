import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { Experience, Role } from '../interfaces/experience.interface';
import { ExperienceService } from '../Services/experience-service.service';
import { monthsBetween, splitMonths } from '../shared/duration';
import { RevealDirective } from '../shared/reveal.directive';

interface RoleView {
  role: Role;
  period: string;
  duration: string;
  summary: string;
  bullets: string[];
}

@Component({
  selector: 'experience',
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  private readonly i18n = inject(I18nService);
  private readonly today = new Date();

  private readonly data = toSignal(
    inject(ExperienceService)
      .getExperience()
      .pipe(
        catchError((error: Error) => {
          console.error('Error loading experience:', error);
          return of(null);
        }),
      ),
    { initialValue: null as Experience | null },
  );

  readonly company = computed(() => this.data()?.company ?? null);

  readonly roles = computed<RoleView[]>(() =>
    (this.data()?.roles ?? []).map((role) => {
      const start = this.parseMonth(role.start);
      const end = role.end ? this.parseMonth(role.end) : this.today;
      const summaryKey = `experience.roles.${role.id}.summary`;

      return {
        role,
        period: `${this.formatMonth(start)} - ${role.end ? this.formatMonth(end) : this.i18n.t('experience.present')}`,
        duration: this.formatDuration(monthsBetween(start, end)),
        summary: this.i18n.has(summaryKey) ? this.i18n.t(summaryKey) : '',
        bullets: this.i18n.list(`experience.roles.${role.id}.bullets`),
      };
    }),
  );

  readonly totalDuration = computed(() => {
    const roles = this.data()?.roles ?? [];
    if (!roles.length) {
      return '';
    }
    const firstStart = roles
      .map((role) => this.parseMonth(role.start))
      .reduce((earliest, date) => (date < earliest ? date : earliest));
    return this.formatDuration(monthsBetween(firstStart, this.today));
  });

  private parseMonth(value: string): Date {
    const [year, month] = value.split('-').map(Number);
    return new Date(year, month - 1, 1);
  }

  private formatMonth(date: Date): string {
    return new Intl.DateTimeFormat(this.i18n.locale, { month: 'short', year: 'numeric' }).format(date);
  }

  private formatDuration(totalMonths: number): string {
    const { years, months } = splitMonths(totalMonths);
    const parts: string[] = [];
    if (years) {
      parts.push(`${years} ${this.i18n.t(years === 1 ? 'duration.year' : 'duration.years')}`);
    }
    if (months) {
      parts.push(`${months} ${this.i18n.t(months === 1 ? 'duration.month' : 'duration.months')}`);
    }
    return parts.join(this.i18n.t('duration.and'));
  }
}

