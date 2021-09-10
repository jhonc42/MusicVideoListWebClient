import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestResult } from '../models/request-result';
import { UserToken } from '../models/user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/Login`;
    const body = {email, password};

    return this.http.post<RequestResult<UserToken>>(url, body);
  }
}
