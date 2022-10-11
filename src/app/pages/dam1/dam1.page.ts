import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
  
})
export class Dam1Page implements OnInit {

  checkPro: boolean = false;
  checkBd: boolean = true;
  checkEd: boolean = false;
  checkLm: boolean = true;
  checkSis: boolean = false;
  checkFol: boolean = true;
  checkEng: boolean = false;

  toastController: any;

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
    });
    toast.present();
  }

  constructor() { }

  ngOnInit() {
  }

}
