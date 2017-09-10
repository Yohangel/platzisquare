import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from '../services/auth.service';
@Injectable()
export class Guard implements CanActivate{
	loggedIn = false;
	constructor(private authService:AuthService){
		this.authService.isLogged()
		.subscribe((response) =>{
			if(response && response.uid){
				this.loggedIn = true;
			}else{
				this.loggedIn = false;
			}
		}, (error) =>{
			this.loggedIn = false;
		})
	}
	canActivate(){
		return this.loggedIn;
	}
}