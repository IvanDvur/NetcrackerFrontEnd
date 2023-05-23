import {Component, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAuthorized:boolean = false;
  title = 'Sender';
  isScrolled: boolean = false;

  constructor(private service: TokenStorageService,private router: Router) {

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  logout(){
    this.service.signOut()
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
    this.isAuthorized = this.service.isAuthorized();
  }
}
