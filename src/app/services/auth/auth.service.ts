import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthLoginInfo} from "./login-info";
import {Observable} from "rxjs";
import {JwtResponse} from "./jwt-response";
import {TokenDto} from "./token-dto";



const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl= 'http://localhost:8080/auth/sign-in'
  oauthURL = 'http://localhost:8080/oauth/';

  attempAuth(credentials:AuthLoginInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl,credentials,httpOptions);
  }
  public google(tokenDto: TokenDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.oauthURL + 'google', tokenDto, httpOptions);
  }
  constructor(private  http:HttpClient) { }
}
