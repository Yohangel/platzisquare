import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
        state('inicial', style({
          opacity: 0
        })),
        state('final', style({
          opacity: 1
        })),
        transition('inicial => final', animate(2000)),
        transition('final => inicial', animate(1000))
      ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'inicial';
  loggedIn = false;
  lat:number = 4.650663;
  lng:number = -74.0595918;
  lugares = null;
  constructor(private lugaresService: LugaresService, private authService:AuthService){
    lugaresService.getLugares()
      .subscribe(lugares=>{
        this.lugares = lugares;
        this.state = 'final';
      });
    this.authService.isLogged()
      .subscribe((response) =>{
      if(response && response.uid){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    }, (error) =>{
      this.loggedIn = false;
    });
  };

}
