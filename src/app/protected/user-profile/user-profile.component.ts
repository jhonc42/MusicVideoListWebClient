import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [
  ]
})
export class UserProfileComponent implements OnInit {
  

  get user() {
    return this.authService.user;
  }  

  userForm: FormGroup = this.fb.group({
    email: [this.authService.user.email, [Validators.required, Validators.email]],
    name: [this.authService.user.name, [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { 
  }

  ngOnInit(): void {
  }


}
