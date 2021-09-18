import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestResult } from 'src/app/auth/models/request-result';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { SearchYTResult } from '../models/search-yt-result';

@Injectable({
    providedIn: 'root'
  })
  export class SearchService {
  
    private baseUrl: string = environment.baseUrl;
    constructor(private http: HttpClient, private authService: AuthService) { }
  
    searchByWord (search:string) {
      const maxResults = 8;
      // TODO Cambiar por interceptor luego
      const headers = new HttpHeaders().set('authorization', `bearer ${this.authService.user.token}`);
      const url = `${this.baseUrl}/Search?KeyWord=${search}&MaxResults=${maxResults}`;
      return this.http.get<RequestResult<SearchYTResult>>(url, {headers});
    }
  }