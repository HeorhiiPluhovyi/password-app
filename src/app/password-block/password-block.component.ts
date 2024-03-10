import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

import { Subscription } from "rxjs";
import {
  PasswordStrengthComponent
} from "./password-strength/password-strength.component";

@Component({
  selector: 'app-password-block',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordStrengthComponent
  ],
  templateUrl: './password-block.component.html',
  styleUrl: './password-block.component.scss'
})
export class PasswordBlockComponent {
  form!: FormGroup;
  // min length of password
  private minPasswordLength: number = 8;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: [
        null,
        [
          Validators.required, // validator this field is mandatory
          Validators.minLength(this.minPasswordLength), // validator this field must be >= minPasswordLength
        ],
        []
      ]
    });
  }

  checkStrength(p: string) {
    // if form not untouched
    if (!this.form.dirty) {
      return -1
    }
    // strength of password,
    // strength 0 invalid password
    // strength 1 Only letters/digits/symbols - the password is easy
    // strength 2 Combination of letters-symbols/letters-digits/digits-symbols
    // - the password is medium
    // strength 3 Has letters, symbols and numbers - the password is strong;
    let strength = 0;
    // we check if password are invalid
    if (this.form.invalid) {
      return strength;
    }
    // if password includes symbols
    if (/[$-/:-?{-~!"^_@`\[\]]/g.test(p)) {
      strength++
    }
    // if password includes letters
    if (/[a-zA-Z]/g.test(p)) {
      strength++
    }
    // if password includes digits
    if (/[0-9]/g.test(p)) {
      strength++
    }

    return strength;
  }

  onSubmit() {
    console.log(this.form.value);
    // reset form
    this.form.reset();
  }
}
