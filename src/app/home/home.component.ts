import {Component, HostListener} from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Sender';
  isScrolled: boolean = false;
  constructor(private dialog: MatDialog,private router: Router) {}


  openRegistrationDialog() {
    this.dialog.open(RegistrationComponent);
  }
  openAuthDialog() {
    this.dialog.open(AuthorizationComponent);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }


}
