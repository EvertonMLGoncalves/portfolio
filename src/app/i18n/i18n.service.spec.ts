import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(async () => {
    localStorage.removeItem('portfolio.lang');
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(I18nService);
    const http = TestBed.inject(HttpTestingController);

    const loading = service.load();
    http.expectOne('assets/i18n/en.json').flush({
      greeting: 'Hello',
      only: { english: 'fallback' },
      rights: '(c) {year}',
      items: ['a', 'b'],
    });
    http.expectOne('assets/i18n/pt.json').flush({ greeting: 'Olá', rights: '(c) {year}' });
    await loading;
  });

  it('translates with the current language and switches', () => {
    service.setLang('en');
    expect(service.t('greeting')).toBe('Hello');
    service.toggle();
    expect(service.lang()).toBe('pt');
    expect(service.t('greeting')).toBe('Olá');
  });

  it('falls back to English and then to the key', () => {
    service.setLang('pt');
    expect(service.t('only.english')).toBe('fallback');
    expect(service.t('does.not.exist')).toBe('does.not.exist');
  });

  it('replaces params and reads lists', () => {
    service.setLang('en');
    expect(service.t('rights', { year: 2026 })).toBe('(c) 2026');
    expect(service.list('items')).toEqual(['a', 'b']);
    expect(service.has('items')).toBeTrue();
    expect(service.has('nope')).toBeFalse();
  });
});
