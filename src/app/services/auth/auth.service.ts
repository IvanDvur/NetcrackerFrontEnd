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

  private loginUrl= 'http://localhost:8080/auth/sign-in'
  oauthURL = 'http://localhost:8080/oauth/';

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

  // retrieveToken(code){
  //   let params = new URLSearchParams();
  //   params.append('grant_type','authorization_code');
  //   params.append('client_id', this.clientId);
  //   params.append('redirect_uri', this.redirectUri);
  //   params.append('code',code);
  //
  //   let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
  //   this._http.post('http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/token', params.toString(), { headers: headers })
  //     .subscribe(
  //       data => this.saveToken(data),
  //       err => alert('Invalid Credentials')
  //     );
  // }
  //
  // saveToken(token){
  //   var expireDate = new Date().getTime() + (1000 * token.expires_in);
  //   Cookie.set("access_token", token.access_token, expireDate);
  //   Cookie.set("id_token", token.id_token, expireDate);
  //   console.log('Obtained Access token');
  //   window.location.href = 'http://localhost:8089';
  // }
  //
  // getResource(resourceUrl) : Observable<any>{
  //   var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
  //   return this._http.get(resourceUrl, { headers: headers })
  //     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  // }
  //
  // checkCredentials(){
  //   return Cookie.check('access_token');
  // }
}
