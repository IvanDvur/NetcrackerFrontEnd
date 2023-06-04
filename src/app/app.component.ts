import {Component, HostListener, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showHeader: boolean;
  constructor(private router:Router) {


  }

  ngOnInit(): void {
    this.router.events.subscribe((event:NavigationEnd) =>{
      if(event.url!= null) {
        this.showHeader = !event.url.startsWith('/login');
      }
    })

  }

}
