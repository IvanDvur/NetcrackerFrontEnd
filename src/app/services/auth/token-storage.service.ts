import { Injectable } from '@angular/core';
import jwt_decode, {JwtPayload} from "jwt-decode";

const TOKEN_KEY='AuthToken'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(){
    window.sessionStorage.clear()
  }

  public saveToken(token:string){
    let decodedJWT = JSON.parse(window.atob(token.split('.')[1]))
    console.log(decodedJWT)
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
    window.sessionStorage.setItem('role',decodedJWT.role)
  }

  public getToken():string|null{
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public isAuthorized():boolean{
    return sessionStorage.getItem(TOKEN_KEY)!=null;
  }

  public isAuthenticated():Promise<boolean>{
    return new Promise(
      resolve =>{
        resolve(sessionStorage.getItem(TOKEN_KEY)!=null)
      }
    );
  }
}
