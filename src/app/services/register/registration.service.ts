import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {JwtResponse} from "../auth/jwt-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterInfo} from "./register-info";

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({providedIn: 'root'})
export class RegistrationService {

  private registgrationURL = "http://localhost:8080/auth/register";

  attempAuth(credentials:RegisterInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.registgrationURL,credentials,httpOptions);
  }
  constructor(private  http:HttpClient) { }

}
