import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  asignaturas=[

    {nombre:"Desarrollo de Interfaces",
  icono:"bar-chart-outline",
checkbox: "checkbox1"},

  {nombre: "Acceso a datos",
  icono: "cloud-download-outline",
  checkbox: "checkbox2"},

  {nombre: "Programación de servicios y procesos",
  icono: "desktop-outline",
  checkbox: "checkbox3"},

  {nombre: "Programación multimedia y dispoditivos móviles",
  icono: "phone-portrait-outline",
  checkbox: "checkbox4"},

  {nombre: "Sistemas de gestión empresarial",
  icono: "bar-chart-outline",
  checkbox: "checkbox5"},
  ]

}
