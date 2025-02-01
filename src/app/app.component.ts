import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `

    <!-- header -->

    <app-header></app-header>

    <!-- footer -->

    <app-footer></app-footer>

      `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaultaschenWG';
}
