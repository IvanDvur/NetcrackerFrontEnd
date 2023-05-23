import {Component, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {Route, Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAuthorized:boolean = false;
  title = 'Sender';
  isScrolled: boolean = false;
  username:string;
  public getDecodedAccessToken(token: string|null): any {
    try {
      return jwt_decode(<string>token);
    } catch(Error) {
      return null;
    }
  }
  constructor(private service: TokenStorageService,private router: Router) {

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  logout(){
    this.service.signOut()
    this.router.navigate(['home'])
    this.isAuthorized = this.service.isAuthorized();
  }

  ngOnInit(): void {
    const s  = this.getDecodedAccessToken(this.service.getToken());
    this.username =s.sub;
    this.isAuthorized = this.service.isAuthorized();
  }
}
