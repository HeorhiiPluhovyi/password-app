import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PasswordBlockComponent
} from "./password-block/password-block.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'password-app';
}
