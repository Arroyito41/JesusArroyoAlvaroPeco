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
  checkbox: "checkbox1",
  color: "primary",
  mostrar: "false"},

  {nombre: "Acceso a datos",
  icono: "cloud-download-outline",
  checkbox: "checkbox2",
  color: "secondary",
  mostrar: "true"},

  {nombre: "Programación de servicios y procesos",
  icono: "desktop-outline",
  checkbox: "checkbox3",
  color:"danger",
  mostrar: "false"},

  {nombre: "Programación multimedia y dispoditivos móviles",
  icono: "phone-portrait-outline",
  checkbox: "checkbox4",
  color: "light",
  mostrar: "false"},

  {nombre: "Sistemas de gestión empresarial",
  icono: "bar-chart-outline",
  checkbox: "checkbox5",
  color: "dark",
  mostrar: "false"},
  ]

}
