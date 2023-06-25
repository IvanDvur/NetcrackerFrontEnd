import {Component, HostListener} from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog: MatDialog,private router: Router) {}

  getMainColor():string {
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
