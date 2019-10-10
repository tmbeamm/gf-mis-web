import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const endpoint = environment.services;
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(
    private http: HttpClient
  ) { }

  getAccessTokenByCode(code): Observable<any> {
    let body = {
      code: code
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8'

      }),
      responseType: 'text' as 'json'
    };
    let url = endpoint.authen.endpoint.accessTokenByCode
    return this.http.post<any>(url, body, httpOptions)
      .pipe(
        tap(_ => console.log('getAccessTokenByCode')),
        catchError(this.handleError('getAccessTokenByCode', null))
      );
  }

  profileGFMIS(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': sessionStorage.getItem('access_token')
      })
    };
    let url = endpoint.profile.endpoint.profile;
    let reqBody = {};
    return this.http.post<any>(url, reqBody, httpOptions)
      .pipe(
        tap(_ => console.log('profileGFMIS')),
        catchError(this.handleError('profileGFMIS', null))
      );
  }

  profileGFMISGet(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': sessionStorage.getItem('access_token')
      })
    };
    let url = 'https://auth.nerves-cloud.com:9443/oauth2/userinfo';
    let reqBody = {};
    return this.http.post<any>(url, reqBody, httpOptions)
      .pipe(
        tap(_ => console.log('profileGFMIS')),
        catchError(this.handleError('profileGFMIS', null))
      );
  }

  getUserMe(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8'

      }),
      responseType: 'text' as 'json',
      withCredentials: true
    };
    let url = endpoint.authen.endpoint.userme;
    return this.http.post<any>(url, httpOptions)
      .pipe(
        tap(_ => console.log('getAccessTokenByCode')),
        catchError(this.handleError('getAccessTokenByCode', null))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


