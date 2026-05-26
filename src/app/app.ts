import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria/angular-aria';
import { SignalForms } from './topics/signal-forms';
import { ServiceExample } from './topics/service/service';
import { Resources } from './topics/resources/resources';
import { Debounced } from './topics/debounced/debounced';
import { InjectAsync } from './topics/injectAsync/injectAsync';
import { CommentsInHtmlElement } from './topics/comments-in-html-element';
import { SafeNavigationAlignedWithTS } from './topics/safe-navigation-aligned-with-ts/safe-navigation-aligned-with-ts';

@Component({
  selector: 'app-root',
  imports: [
    AngularAria,
    SignalForms,
    ServiceExample,
    Resources,
    Debounced,
    InjectAsync,
    CommentsInHtmlElement,
    SafeNavigationAlignedWithTS,
  ],
  template: `
    <h1>v22</h1>

    <h2>Signal Forms package: Stable</h2>
    <app-signal-forms />

    <h2>Angular Aria package (<code>@angular/aria</code>): Stable</h2>
    <app-angular-aria />

    <h2>Service decorator: Stable</h2>
    <app-service />

    <h2>Resources: Stable</h2>
    <app-resources />

    <h2>debounced: Stable</h2>
    <app-debounced />

    <h2>injectAsync: Stable</h2>
    <app-injectAsync />

    <h2>Safe Navigation and Nullish Coalescing in templates aligning with TS spec: Stable</h2>
    <app-safe-navigation-aligned-with-ts />

    <h2>Comments in HTML elements: Stable</h2>
    <app-comments-in-html-element />
  `,
})
export class App {}
