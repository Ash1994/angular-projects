import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './User';

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
  constructor(private httpClient: HttpClient) { }

  private userID = 1;
  private baseUrl = '/user/getById';

  public getUserID() {
      return this.userID;
  }

  public setUserID(userID: any) {
      this.userID = userID;
  }

  public getUser(): Observable<User> {     
    return this.httpClient.get<User>(`${this.baseUrl}/${this.userID}`, {responseType: "json"},)
      .pipe(retry(0), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}