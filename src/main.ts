import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { inject, provideAppInitializer } from '@angular/core';
import { AppComponent } from './app/app.component';
import { I18nService } from './app/i18n/i18n.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAppInitializer(() => inject(I18nService).load()),
  ],
}).catch((err) => console.error(err));
