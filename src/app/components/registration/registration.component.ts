import { Component } from '@angular/core';
import {AuthLoginInfo} from "../../services/auth/login-info";
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/auth/token-storage.service";
import {Router} from "@angular/router";
import {RegisterInfo} from "../../services/register/register-info";
import {RegistrationService} from "../../services/register/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  checkoutForm;
  private registerInfo: RegisterInfo;
  constructor( private formBuilder: FormBuilder,private registerService: RegistrationService,
               private tokenStorage: TokenStorageService,private router: Router){
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: '',
      matchingPassword: '',
      email: ''
    });
  }

  onSubmit(value:any) {
    console.log(this.checkoutForm.value)
    this.registerInfo = new RegisterInfo(
      this.checkoutForm.value.username||'',
      this.checkoutForm.value.password||'',
      this.checkoutForm.value.matchingPassword||'',
      this.checkoutForm.value.email||'');

    this.registerService.attempAuth(this.registerInfo).subscribe(
      data=>{
        console.log(data.token)
        this.tokenStorage.saveToken(data.token)
        this.router.navigate(['/workspace']);
      }
    )
  }

  redirectToLogin() {
    this.router.navigate(['login'])
  }

  redirectToHome() {
    this.router.navigate(['home'])
  }
}
