import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
  
})
export class Dam1Page implements OnInit {

  checkPro: boolean = false;
  checkBd: boolean = false;
  checkEd: boolean = false;
  checkLm: boolean = false;
  checkSis: boolean = false;
  checkFol: boolean = false;
  checkEng: boolean = false;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  
  async programacion() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Programacion',
      duration: 2000,
    });
    toast.present();
  }

  async bbdd() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Bases de Datos',
      duration: 2000,
    });
    toast.present();
  }

  async entornos() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Entornos de Desarrollo',
      duration: 2000,
    });
    toast.present();
  }

  async lenguajes() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Lenguajes de Marcas',
      duration: 2000,
    });
    toast.present();
  }

  async sistemas() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Sistemas Informáticos',
      duration: 2000,
    });
    toast.present();
  }

  async fol() {
    const toast = await this.toastController.create({
      message: 'Ha elegido FOL',
      duration: 2000,
    });
    toast.present();
  }

  async ingles() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Inglés',
      duration: 2000,
    });
    toast.present();
  }

}
