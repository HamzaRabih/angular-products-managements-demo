import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone: true
})
export class App {
  protected readonly title = signal('frontend-angular-digital-banking');
  emailVar :string='email@enset.ma';
}
