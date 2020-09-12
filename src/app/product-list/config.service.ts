import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './User';
import { Gallery } from './Gallery';

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {

  protected basePath = '/gwp';
  private userID = 1;
  private imamgeID = '5f5d0b8d8068d15894b1369d';
  private baseUrl = '/api/user/getById';
  private gallerybaseUrl = '/api/gallery';
  private galleryImagebaseUrl = '/api/galleryImage';

  constructor(private httpClient: HttpClient) { }

  public getUserID() {
      return this.userID;
  }

  public setUserID(userID: any) {
      this.userID = userID;
  }

  public getUser(): Observable<User> {     
    return this.httpClient.get<User>(`${this.baseUrl}/${this.userID}`, {responseType: "json"})
      .pipe(retry(0), catchError(this.handleError));
  }

  public getGallery(): Observable<Gallery> {     
    return this.httpClient.get<Gallery>(`${this.gallerybaseUrl}/${this.imamgeID}`, {responseType: "json"})
      .pipe(retry(0), catchError(this.handleError));
  }

  public getGalleryImage(): Observable<Gallery> {     
    return this.httpClient.get<Gallery>(`${this.galleryImagebaseUrl}/${this.imamgeID}`, {responseType: "json"})
      .pipe(retry(0), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}