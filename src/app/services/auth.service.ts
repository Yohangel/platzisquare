import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
	constructor(private angularFireAuth: AngularFireAuth, private router:Router){
		this.isLogged();
	};
	public facebookLogin(){
		this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
		.then((response)=>{
			alert('usuario logeado con exito!');
			console.log(response);
			this.router.navigate(["/lugares"]);
		})
		.catch((error)=>{
			alert('Un error ha ocurrido');
			console.log(error);
		})
	};
	public login (email, password){
		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).
		then((response)=>{
			alert('usuario logeado con exito!');
			console.log(response);
			this.router.navigate(["/lugares"]);
		})
		.catch((error)=>{
			alert('Un error ha ocurrido');
			console.log(error);
		})
	};
	public register (email, password){
		this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password).
		then((response)=>{
			alert('usuario registrado con exito!');
			console.log(response);
			this.router.navigate(["/lugares"]);
		})
		.catch((error)=>{
			alert('Un error ha ocurrido');
			console.log(error);
		})
	};
	public isLogged(){
		return this.angularFireAuth.authState;
	};
	public logout(){
		this.angularFireAuth.auth.signOut();
		alert('Sesion finalizada!');
		this.router.navigate(["/lugares"]);
	}
	public getUser(){
		return this.angularFireAuth.auth;
	}
}