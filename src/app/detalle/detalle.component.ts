import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	
  	id = null;
  	lugar: any = {};
  	lugares = null;
	constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
		this.id = this.route.snapshot.params['id'];
		this.lugar = this.lugaresService.buscarLugar(this.id);
		this.lugares = lugaresService.getLugares();
	}
}
