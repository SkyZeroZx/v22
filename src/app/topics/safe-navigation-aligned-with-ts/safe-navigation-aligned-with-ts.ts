import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-safe-navigation-aligned-with-ts',
  imports: [MarkdownModule],
  template: `
    <markdown [src]="'safe-navigation-aligned-with-ts/safenav.md'" />

    <p>typeof foo?.bar: {{ typeof foo?.bar }}</p>
    <p>typeof foo?.bar === typeof nullValue: {{ typeof foo?.bar === typeof nullValue }}</p>

    <p>
      typeof $safeNavigationMigration(foo?.bar): {{ typeof $safeNavigationMigration(foo?.bar) }}
    </p>
    <p>
      typeof $safeNavigationMigration(foo?.bar) === typeof nullValue:
      {{ typeof $safeNavigationMigration(foo?.bar) === typeof nullValue }}
    </p>
  `,
})
export class SafeNavigationAlignedWithTS {
  foo: { bar: string } | null = null;
  nullValue = null;
}
