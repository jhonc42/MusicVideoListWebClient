import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayList } from 'src/app/auth/models/play-list';
import { RequestResult } from 'src/app/auth/models/request-result';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayListItemService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  getPlayList (id:string) {
    id = "6137ddd5760a079cfa645d49";
    // TODO Cambiar por interceptor luego
    const headers = new HttpHeaders().set('authorization', `bearer ${this.authService.user.token}`);
    const url = `${this.baseUrl}/PlayListItem/GetPlayList/${id}`;
    return this.http.get<RequestResult<PlayList>>(url, {headers});
  }
}
