import {Component, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean = false;
  title;
  isScrolled: boolean = false;
  username: string;

  constructor(private service: TokenStorageService, private router: Router, private socialAuth: SocialAuthService) {

  }

  public getDecodedAccessToken(token: string | null): any {
    try {
      return jwt_decode(<string>token);
    } catch (Error) {
      return null;
    }
  }

  logout() {
    this.socialAuth.signOut(true);
    this.service.signOut()
    this.router.navigate(['home'])
    this.isAuthorized = this.service.isAuthorized();
  }

  ngOnInit(): void {
    if(this.service.getToken()!=null) {
      const s = this.getDecodedAccessToken(this.service.getToken());
      this.username = s.sub;
    }
    this.isAuthorized = this.service.isAuthorized();

  }
  getHeaderTitle():string {
    let role  = window.sessionStorage.getItem('role')
    switch (role){
      case 'USER':
        return 'AdVantage'
      case 'USER_PLUS':
        return 'AdVantage Plus'
      case 'USER_PREMIUM':
        return 'Advantage Premium'
      default:
        return 'Advantage'
    }
  }

  getHeaderColor():string {
    let role  = window.sessionStorage.getItem('role')
    switch (role){
      case 'USER':
        return 'background: linear-gradient(to right, #064f95, #007bff);'
      case 'USER_PLUS':
        return 'background: linear-gradient(to right,#007bff , #9C27B0);'
      case 'USER_PREMIUM':
        return 'background: linear-gradient(to right,#9C27B0, #FF9800 );'
      default:
        return 'background: linear-gradient(to right, #064f95, #007bff);'
    }
  }
}
