import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombre : String;
  apellidos : String;
  dni: String;
  localidad: String;
  email: String;
  contrasena: String;
  estudios: string;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if(this.nombre==null){
      alert("Rellene el campo nombre");
    }else if(this.apellidos==null){
      alert("Rellene el campo apellidos")
    }else if(this.dni==null){
      alert("Rellene el campo DNI")
    }else if(this.email==null){
      alert("Rellene el campo Email")
    }else if (this.localidad==null){
      alert ("rellene el campo localidad")
    }else if (this.contrasena==null){
      alert ("Rellene el campo contraseña, minimo 8 caracteres")
    }else if (this.estudios==null){
      alert ("Rellene el cammpo estudios")
    }
     else{
      alert("Formulario enviado");
      this.nombre="";
      this.apellidos="";
      this.dni="";
      this.localidad="";
      this.email="";
    }
  }
}
