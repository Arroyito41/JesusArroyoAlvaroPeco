import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
  
})
export class Dam1Page implements OnInit {

  varPro: string="Programacion";
  varBbdd: string="BBDD";
  varEndes: string="Entornos";
  varLm: string="Lenguajes";
  varSis: string="Sistemas";
  varFol: string="Fol";
  varIng: string="Ingles";

  constructor() { }

  ngOnInit() {
  }

}
