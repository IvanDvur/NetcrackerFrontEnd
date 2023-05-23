import {Component, OnInit} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit{
  username:string;
  public getDecodedAccessToken(token: string|null): any {
    try {
      return jwt_decode(<string>token);
    } catch(Error) {
      return null;
    }
  }
  constructor(private token:TokenStorageService,private router: Router ){


  }

  ngOnInit(): void {
    const s  = this.getDecodedAccessToken(this.token.getToken());
    this.username =s.sub;
  }

  logOut() {
    this.token.signOut();

    this.router.navigate(['/home']);
  }
}
