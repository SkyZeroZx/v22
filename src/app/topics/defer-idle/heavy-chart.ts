import { Component } from '@angular/core';

@Component({
  selector: 'heavy-chart',
  template: `<p>📊 Heavy analytics chart loaded!</p>`,
  styles: `
    :host {
      display: block;
      padding: 1rem;
      border-radius: 8px;
      animation: bgFade 1.5s ease-out forwards;
    }
    @keyframes bgFade {
      from { background: #ffffff; }
      to   { background: #e8f5e9; }
    }
  `,
})
export class HeavyChart {}
