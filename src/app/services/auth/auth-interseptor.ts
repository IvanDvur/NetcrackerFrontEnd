import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "./token-storage.service";

const TOKEN_HEADER_KEY="Authorization"

@Injectable()
export class AuthInterseptor implements HttpInterceptor{

  constructor(private token:TokenStorageService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq =req
    const token=this.token.getToken()
    if (token != null){
      authReq= req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,"Bearer "+token)})
    }

    return next.handle(authReq);
  }

}
export const httpIterseptorProviders=[
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterseptor,multi:true}
]
