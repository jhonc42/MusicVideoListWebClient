import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  
  myForm: FormGroup = this.fb.group({
    email: ['asdfads@asdf.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  login() {
    const {email, password} = this.myForm.value;
    this.authService.login(email, password)
      .subscribe(isSuccess => {
        // this is because may come an object through map operator of authService
        if (isSuccess === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', isSuccess, 'error')
        }
      });
    // this.router.navigateByUrl('/dashboard');
  }

  // login = () => {
  //   console.log(this.myForm.value);
  //   console.log(this.myForm.valid);
  // }
}
