import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideIdleServiceWith } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { PriorityIdleService } from './topics/defer-idle/defer-idle';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideMarkdown(), provideIdleServiceWith(PriorityIdleService)],
};
