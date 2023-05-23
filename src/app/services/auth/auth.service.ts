import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthLoginInfo} from "./login-info";
import {Observable} from "rxjs";
import {JwtResponse} from "./jwt-response";



const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl= 'http://localhost:8080/auth/sign-in'

  attempAuth(credentials:AuthLoginInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl,credentials,httpOptions);
  }

  constructor(private  http:HttpClient) { }
}
