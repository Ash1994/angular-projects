import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = '3d0ff0cf-336b-4b30-ae3b-78a572fed78c';
    const modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${userToken}`),
      });
      return next.handle(modifiedReq);
  }
}