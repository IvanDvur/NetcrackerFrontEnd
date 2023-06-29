import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthLoginInfo} from "./login-info";
import {catchError, Observable, throwError} from "rxjs";
import {JwtResponse} from "./jwt-response";
import {TokenDto} from "./token-dto";

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl= 'http://data-service:8080/auth/sign-in'
  oauthURL = 'http://data-service:8080/oauth/';

  constructor(private  http:HttpClient) { }

  attempAuth(credentials:AuthLoginInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl,credentials,httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(()=>new Error("User already exists"));
  }
  public google(tokenDto: TokenDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.oauthURL + 'google', tokenDto, httpOptions);
  }
}
