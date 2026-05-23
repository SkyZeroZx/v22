import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, minLength, required, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, FormRoot],
  template: `
    <p><a href="https://angular.dev/guide/forms/signals/overview" target="_blank">Docs</a></p>
    <em>TODO: add examples</em>

    <form [formRoot]="passwordForm">
      <label>
        New Password
        <input type="password" [formField]="passwordForm.password" />
      </label>
      <label>
        Confirm Password
        <input type="password" [formField]="passwordForm.confirmPassword" />
      </label>
      <button type="submit">Change Password</button>
    </form>
  `,
})
export class SignalForms {
  passwordModel = signal({
    password: '',
    confirmPassword: '',
  });
  passwordForm = form(this.passwordModel, (schemaPath) => {
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });
    required(schemaPath.confirmPassword, { message: 'Please confirm your password' });
    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);
      if (confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match',
        };
      }
      return null;
    });
  });
}
