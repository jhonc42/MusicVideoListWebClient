import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestResult } from '../models/request-result';
import { UserToken } from '../models/user-token';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = environment.baseUrl;
  private _user!: UserToken;

  get user() {
    return {...this._user}
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/Login`;
    const body = {email, password};

    return this.http.post<RequestResult<UserToken>>(url, body)
    .pipe(
      tap(resp => {
        if (resp.isSuccess) {
          this.setConfig(resp.data!);
        }
      }),
      map(resp => resp.isSuccess),
      catchError(err => of(err.error.message))
    );
  }

  validateToken (): Observable<boolean> {
    const url = `${this.baseUrl}/Login/renew`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('authorization', `bearer ${token}`);
    return this.http.get<UserToken>(url, { headers })
    . pipe(
      map(resp => {
        // Esto para ejecutar otro código aqui.
        this.setConfig(resp);
        return true
      }),
      catchError(err => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  setConfig(resp: UserToken) {
    localStorage.setItem('token', resp.token!);
    this._user = {
      name: resp.name!,
      id: resp.id!,
      token: resp.token!,
      email: resp.email!,
      role: resp.role!
    }
  }
}
