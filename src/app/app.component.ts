import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	loggedIn = false;
	user:any = null;
	constructor(private authService:AuthService){
		this.authService.isLogged()
		.subscribe((response) =>{
			if(response && response.uid){
				this.loggedIn = true;
				setTimeout(()=>{
					this.user = this.authService.getUser().currentUser.email;
				}, 500);
			}else{
				this.loggedIn = false;
			}
		}, (error) =>{
			this.loggedIn = false;
		});
	}
	logout(){
		this.authService.logout();
	}
}
