import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchYTResult } from '../models/search-yt-result';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  
  get user() {
    return this.authService.user;
  }
  constructor(private router: Router, private authService: AuthService, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
