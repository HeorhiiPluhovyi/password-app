import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  // strength of password -1 to 3
  @Input() strength!: number;
  classes: Map<number, string> = new Map([
    [ -1, "untouched" ],
    [ 0, "invalidLength" ],
    [ 1, "easy" ],
    [ 2, "medium" ],
    [ 3, "hard" ],
  ]);
}

