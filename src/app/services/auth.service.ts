import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = `${environment.port}/admin/actions/login`
  private _logoutUrl = `${environment.port}/admin/actions/logout`

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  isLoggedIn() {
    return !!localStorage.getItem('uuid_auth')
  }

  logout() {
    return this.http.delete(this._logoutUrl)
  }

  getToken():String {
    return localStorage.getItem('uuid_auth').toString();
  }


}
