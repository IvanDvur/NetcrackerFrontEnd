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
  title = 'Sender';
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
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
}
