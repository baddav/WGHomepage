import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="navbar list-group-item-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          here goes the logo
        </a>
      </div>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
