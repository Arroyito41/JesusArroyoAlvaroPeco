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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
    });
    toast.present();
  }

}
