import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesContactosService {

  backend =environment.backend+"/solicitud-formulario";
  constructor(private http:HttpClient) { }

  registrarFormulario(solicitud_formulario:any){
    return this.http.post(`${this.backend}/crear-solicitud-formulario`, {solicitud_formulario})
  }

  obtenerTodasSolicitudes(){
    return this.http.get(`${this.backend}/obtener-solicitudes-formulario`);
  }
}

  
