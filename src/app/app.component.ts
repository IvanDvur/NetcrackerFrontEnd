import {Component, HostListener, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showHeader: boolean = true;

  constructor(private router: Router,
              private config: PrimeNGConfig,
              private http: HttpClient
  ) {

  }


  ngOnInit(): void {
    this.http.get('assets/ru.json').subscribe((data: any) => {
      this.config.setTranslation(data);
    });
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.url != null) {
        if (event.url.startsWith('/login')) {
          this.showHeader = false;
        } else if (event.url.startsWith('/register')) {
          this.showHeader = false
        }
        else{
          this.showHeader=true
        }
      }
    })
  }
}
