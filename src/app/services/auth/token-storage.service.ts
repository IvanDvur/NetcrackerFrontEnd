import { Injectable } from '@angular/core';

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
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);

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
