import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};
  constructor(private authService:AuthService) { 
  	
  }
  login(){
  	this.authService.login(this.user.email,this.user.password);
  }
  loginFB(){
    this.authService.facebookLogin();
  }

}
