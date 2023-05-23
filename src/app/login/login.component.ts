 import { Component } from '@angular/core';
 import {TokenStorageService} from "../services/auth/token-storage.service";
 import {AuthService} from "../services/auth/auth.service";
 import {FormBuilder} from "@angular/forms";
 import {AuthLoginInfo} from "../services/auth/login-info";
 import {Router} from "@angular/router";
 import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm;
  private loginInfo: AuthLoginInfo;
  constructor( private formBuilder: FormBuilder,private authService: AuthService,
               private tokenStorage: TokenStorageService,private router: Router){
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: '',

    });
  }

  onSubmit(value:any) {
    console.log(this.checkoutForm.value)
    this.loginInfo = new AuthLoginInfo(
      this.checkoutForm.value.username||'',
      this.checkoutForm.value.password||'');


    this.authService.attempAuth(this.loginInfo).subscribe(
      data=>{
        console.log(data.token)
        this.tokenStorage.saveToken(data.token)

        this.router.navigate(['/workspace']);
      }
    )

  }




}
