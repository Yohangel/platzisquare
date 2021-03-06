import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database"
import { Http } from "@angular/http";
@Injectable()
export class LugaresService{
	lugares:any = [
	  	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: "Floreria la Gardenia", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."},
	  	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Donas la pasadita", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."},
	  	{id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Veterinaria Huellitas Felices", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."},
	  	{id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre: "Sushi Suhiroll", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."},
	  	{id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: "Hotel la Gracia", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."},
	  	{id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: "Zapateria el Clavo", description: "Descripcion de este negocio, mas adelante tendremos mas informacion."}
  	];
  	constructor(private afDB:AngularFireDatabase, private http: Http){

  	}
  	public getLugares(){
  		return this.afDB.list('lugares/');
  	}
  	public buscarLugar(id){
		return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
	}
	public guardarLugar(lugar){
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
	}
	public editarLugar(lugar){
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
	}
	public obtenerGeoData(direccion){
		return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
	}
	public getLugar(id){
		return this.afDB.object('lugares/'+id);
	}
}