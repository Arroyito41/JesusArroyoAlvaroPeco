import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombre: string = "Alvaro";
  apellidos: string = "Peco";
  localidad: string = "Ciudad Real";
  estudios: string = "2DAM";
  contraseña: string="";
  constructor() { }

  ngOnInit() {
  }

}
