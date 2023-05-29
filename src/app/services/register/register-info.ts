export class RegisterInfo{
  username:string;
  password:string;
  matchingPassword:string;
  email: string;


  constructor(username: string, password: string, matchingPassword: string, email: string) {
    this.username = username;
    this.password = password;
    this.matchingPassword = matchingPassword;
    this.email = email;
  }
}
