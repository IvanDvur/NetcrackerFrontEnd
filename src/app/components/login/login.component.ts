 import {Component, OnInit} from '@angular/core';
 import {TokenStorageService} from "../../services/auth/token-storage.service";
 import {AuthService} from "../../services/auth/auth.service";
 import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
 import {AuthLoginInfo} from "../../services/auth/login-info";
 import {Router} from "@angular/router";
 import jwt_decode from "jwt-decode";
 import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
 import {TokenDto} from "../../services/auth/token-dto";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  socialUser: SocialUser;
  checkoutForm:FormGroup;
  private loginInfo: AuthLoginInfo;
  constructor( private formBuilder: FormBuilder,private authService: AuthService,
               private tokenStorage: TokenStorageService,private router: Router,private socialAuth:SocialAuthService){

  }

  onSubmit(value:any) {
    console.log(this.checkoutForm)
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


  redirectToRegistration() {
    this.router.navigate(['/register'])
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      username: new FormControl('',[Validators.required]) ,
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),

    });

    this.socialAuth.authState.subscribe((user)=>{
      console.log(user)
      this.socialUser=user
      const  tokenGoogle = new TokenDto(this.socialUser.idToken);
      this.authService.google(tokenGoogle).subscribe(
        res=>{
          console.log(res)
          this.tokenStorage.saveToken(res.value)
          this.router.navigate(['/workspace']);
        }
      )
    })
  }

  signInWithGoogle():void {


    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {

        })
  }
}
