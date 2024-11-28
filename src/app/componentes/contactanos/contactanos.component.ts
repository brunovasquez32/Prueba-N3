import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudesContactanosComponent } from '../solicitudes-contactos/solicitudes-contactanos.component';
import { response } from 'express';
import { SolicitudesContactosService } from '../../servicios/solicitudes-contactos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  solicitudes_recibidas:any;
  constructor(private formBuild: FormBuilder, private solicitudesContactosSrv:SolicitudesContactosService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerTodasSolicitudes();
  }
  enviarDatos(){

    this.datos_formulario = this.formularioForm.value;
    this.solicitudesContactosSrv.registrarFormulario(this.datos_formulario).subscribe(
      (response:any) => {
        if(response.solicitud_formulario){
          alert("Datos guardados correctamente")
          console.log(response.solicitud_formulario);
          this.formularioForm.reset
        }

      },error => {
        console.log(error)
      }
    )
  }

  obtenerTodasSolicitudes(){
    this.solicitudesContactosSrv.obtenerTodasSolicitudes().subscribe(
      (response:any) => {
        this.solicitudes_recibidas = response.solicitud_formulario
        console.log(this.solicitudes_recibidas)
      },error =>{
        console.log(error)
      }
    )
  }
}
