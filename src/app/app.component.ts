import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          here goes the logo
        </a>
      </div>
    </div>

      `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaultaschenWG';
}
