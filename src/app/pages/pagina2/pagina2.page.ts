import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombre: string="Nombre: ";
  apellidos: string="Apellidos: ";
  localidad: string="Localidad: ";
  estudios: string="Estudios: ";
  email: string="Email: ";
  contrasena: string="Password: ";
  escribirnombre: string="Introduce aqui tu nombre";
  escribirapellido: string="Introduce aqui tu apellido";
  escribirlocalidad: string="Introduce aqui tu localidad";
  escribircurso: string="Introduce aqui tu curso";
  escribiremail: string="Introduce aqui tu email";
  escribircontrasena: string="Introduce la contraseña";
  constructor() { }

  ngOnInit() {
  }

}
