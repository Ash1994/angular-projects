import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq: HttpRequest<any>;
    if (req.url.indexOf('/api/') !== -1)  {
      newReq = req.clone({
        headers: req.headers
        .set('userId', '1')
      });
    } else {
      newReq = req;
    }
    return next.handle(newReq);
  }
}
