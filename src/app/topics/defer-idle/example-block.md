> PR [feat(core): Support optional timeout for idle deferred triggers](https://github.com/angular/angular/pull/67190)
>
> Custom idle scheduling via DI: implement `IdleService` and register with `provideIdleServiceWith()`.

### How `idle(timeout)` works

`@defer (on idle)` triggers when the browser is idle via `requestIdleCallback`. The problem: if the page is busy (animations, scrolling, heavy JS), the browser **never** reports idle, and the deferred content waits indefinitely.

`@defer (on idle(500))` adds a **deadline**: "run when idle, but at most after 500ms". Under the hood it passes `{timeout: 500}` to [`requestIdleCallback`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).

- Without timeout: dependent on browser scheduling — may never fire on busy pages
- With timeout: **guaranteed** upper bound — work runs even if the event loop stays saturated

Example: a dashboard loads critical data eagerly, then attempts to lazily load a heavy analytics chart. With `on idle(3000)`, the chart loads during idle on fast devices (zero UX impact) and **no later than 3 seconds** on busy ones.

```html
<div>
  <critical-user-data />
  @defer (on idle(3000)) {
    <heavy-analytics-chart />
  } @placeholder {
    <p>Loading chart…</p>
  }
</div>
```

The `prefetch` and `hydrate` triggers also support the timeout:

```html
@defer (on interaction; prefetch on idle(500)) {
  <heavy-cmp />
}
```

### Custom `IdleService` via DI token

Provides full control over idle scheduling. Useful for testing, non-browser environments, or custom prioritization logic.

Uses native DOM types `IdleDeadline` / `IdleRequestOptions` — no custom type declarations needed.

```ts
import { Service, IdleService, provideIdleServiceWith } from '@angular/core';

@Service()
class PriorityIdleService implements IdleService {
  requestOnIdle(
    callback: (deadline?: IdleDeadline) => void,
    options?: IdleRequestOptions,
  ): number {
    // High-priority work gets a short timeout, low-priority gets longer
    const timeout = options?.timeout ?? 1000;
    return setTimeout(callback, timeout);
  }

  cancelOnIdle(id: number): void {
    clearTimeout(id);
  }
}
```

Register at app level:

```ts
// app.config.ts
import { provideIdleServiceWith } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideIdleServiceWith(PriorityIdleService)],
};
```

> **Note:** The default `IdleService` wraps `requestIdleCallback`, falling back to `setTimeout` when unavailable. See [MDN: requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)