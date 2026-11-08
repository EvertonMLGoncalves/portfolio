import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom, forkJoin } from 'rxjs';

export type Lang = 'en' | 'pt';

type Dictionary = { [key: string]: string | string[] | Dictionary };

const STORAGE_KEY = 'portfolio.lang';
const LOCALES: Record<Lang, string> = { en: 'en-US', pt: 'pt-BR' };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);
  private dictionaries: Record<Lang, Dictionary> = { en: {}, pt: {} };

  readonly lang = signal<Lang>(this.initialLang());

  get locale(): string {
    return LOCALES[this.lang()];
  }

  async load(): Promise<void> {
    const [en, pt] = await firstValueFrom(
      forkJoin([
        this.http.get<Dictionary>('assets/i18n/en.json'),
        this.http.get<Dictionary>('assets/i18n/pt.json'),
      ]),
    );
    this.dictionaries = { en, pt };
    document.documentElement.lang = this.locale;
  }

  toggle(): void {
    this.setLang(this.lang() === 'en' ? 'pt' : 'en');
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = this.locale;
  }

  t(key: string, params?: Record<string, string | number>): string {
    const value = this.find(key, this.lang()) ?? this.find(key, 'en');
    if (typeof value !== 'string') {
      return key;
    }
    return params ? value.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? '')) : value;
  }

  list(key: string): string[] {
    const value = this.find(key, this.lang()) ?? this.find(key, 'en');
    return Array.isArray(value) ? value : [];
  }

  has(key: string): boolean {
    return this.find(key, this.lang()) !== undefined;
  }

  private find(key: string, lang: Lang): string | string[] | undefined {
    let node: string | string[] | Dictionary | undefined = this.dictionaries[lang];
    for (const part of key.split('.')) {
      if (node === undefined || typeof node === 'string' || Array.isArray(node)) {
        return undefined;
      }
      node = node[part];
    }
    return node === undefined || (typeof node === 'object' && !Array.isArray(node)) ? undefined : node;
  }

  private initialLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt') {
      return saved;
    }
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
