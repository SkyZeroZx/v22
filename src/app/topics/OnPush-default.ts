import { Component } from '@angular/core';

@Component({
  selector: 'app-on-push-defult-cd',
  template: `
    <p>
      <a href="https://github.com/angular/angular/discussions/66779" target="_blank"
        >[Complete] RFC: Setting OnPush as the default Change Detection Strategy #66779</a
      >
    </p>

    <ul>
      <li>"Components will default to <code>ChangeDetectionStrategy.OnPush</code>"</li>
      <li>
        "We're renaming <code>ChangeDetectionStrategy.Default</code> to
        <code>ChangeDetectionStrategy.Eager</code>"
      </li>
    </ul>
  `,
})
export class OnPushDefultCD {}
