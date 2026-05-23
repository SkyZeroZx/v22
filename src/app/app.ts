import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria';
import { SignalForms } from './topics/signal-forms';
import { ServiceExample } from './topics/service';
import { Resources } from './topics/resources';
import { Debounced } from './topics/debounced';
import { InjectAsync } from './topics/injectAsync';

@Component({
  selector: 'app-root',
  imports: [AngularAria, SignalForms, ServiceExample, Resources, Debounced, InjectAsync],
  template: `
    <h1>v22</h1>

    <h2>Angular Aria package (<code>@angular/aria</code>): Stable</h2>
    <app-angular-aria />

    <h2>Signal Forms package: Stable</h2>
    <app-signal-forms />

    <h2>Service decorator</h2>
    <app-service />

    <h2>Resources: Stable</h2>
    <app-resources />

    <h2>debounced</h2>
    <app-debounced />

    <h2>injectAsync</h2>
    <app-injectAsync />
  `,
})
export class App {}
