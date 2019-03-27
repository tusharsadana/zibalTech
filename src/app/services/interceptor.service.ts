import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private auth: AuthService) { }
  intercept(req, next) {
    let authService = this.injector.get(AuthService)

    if (this.auth.isLoggedIn()) {
      let toenizedReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-auth': authService.getToken().toString()
        })
      })
      return next.handle(toenizedReq)
    }
    else{
      return next.handle(req.clone())
    }

  }
}
