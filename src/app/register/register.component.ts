import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  user: any = {};
  constructor(private authService:AuthService) { 
  	
  }
  register(){
  	this.authService.register(this.user.email,this.user.password);
  }
}
