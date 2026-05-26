import { Component, IdleService, Service } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HeavyChart } from './heavy-chart';
import { ExpensivePanel } from './expensive-panel';

// Uses native DOM types: IdleDeadline, IdleRequestOptions
// See https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
// NOTE: Safari doesn't support requestIdleCallback; Angular internally uses setTimeout instead.
@Service()
export class PriorityIdleService implements IdleService {
  requestOnIdle(
    callback: (deadline?: IdleDeadline) => void,
    options?: IdleRequestOptions,
  ): number {
    console.log('Custom IdleService scheduling idle work', options);
    return setTimeout(callback, options?.timeout ?? 1000);
  }

  cancelOnIdle(id: number): void {
    clearTimeout(id);
  }
}

@Component({
  selector: 'app-defer-idle',
  imports: [MarkdownModule, HeavyChart, ExpensivePanel],
  template: `
    <markdown [src]="'/defer-idle/example-block.md'" ngPreserveWhitespaces />

    <p>
      All &#64;defer <code>on idle</code> triggers use the custom IdleService. Open console to see
      scheduling.
    </p>

    @defer (on idle(3000)) {
      <heavy-chart />
    } @placeholder {
      <p>⏳ Analytics chart — idle or 3s timeout</p>
    }

    <button type="button" #showPanel>🔧 Show admin panel (prefetched on idle)</button>
    @defer (on interaction(showPanel); prefetch on idle(500)) {
      <expensive-panel />
    }

    @defer (hydrate on idle(2000)) {
      <heavy-chart />
    } @placeholder {
      <p>💧 Heavy widget — hydrate on idle (max 2s)</p>
    }
  `,
})
export class DeferIdle {}
