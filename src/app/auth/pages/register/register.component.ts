import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  myForm: FormGroup = this.fb.group({
    name: ['asdf', [Validators.required]],
    email: ['asdfads@asdf.com', [Validators.required, Validators.email]],
    password: ['124561', [Validators.required, Validators.minLength(6)]]
  });
  constructor(private fb: FormBuilder, private router: Router) { }
  register() {
    console.log(this.myForm.value);
    this.router.navigateByUrl('/dashboard');
  }
}
