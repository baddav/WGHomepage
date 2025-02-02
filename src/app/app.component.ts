import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent],
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
