import {Component, HostListener} from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { RegistrationComponent } from './registration/registration.component';

import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog: MatDialog,private router: Router) {}


  openRegistrationDialog() {
    this.dialog.open(RegistrationComponent);

  }




}
