New behavior for safe navigation inline with TS standard. Note: there is a schematic for this which runs on updating.

> To mitigate this breaking change, this behavior can be disabled by wrapping expressions with the `$safeNavigationMigration` magic function.
> : `$safeNavigationMigration(foo?.bar?.baz)`
>
> fixes https://github.com/angular/angular/issues/34385, https://github.com/angular/angular/issues/37622
>
> BREAKING CHANGE: By default optional chainings will now return `undefined` instead of `null`. This behavior can be disabled by wrapping expressions with the `$safeNavigationMigration` magic function.
> : `$safeNavigationMigration(foo?.bar?.baz)`
>
> [- PR: feat(compiler): Angular expressions with optional chaining returns undefined #68084](https://github.com/angular/angular/pull/68084)

Migration:

> This migration ensure that existing code is wrapped by the `$safeNavigationMigration` magic function when necessary to maintain the pre-exisiting behavior of exisiting optional chaining expressions.
>
> [- PR](https://github.com/angular/angular/pull/68352)
