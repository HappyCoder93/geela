import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private alertController: AlertController, private router: Router) { }

  async orderAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Order successfully sent',
      cssClass: 'order-alert',
      buttons: [
        {
          text: 'Home',
          cssClass: 'order-alert-button',
          handler: () => {
            this.router.navigateByUrl('/menu/home');
          }
        }
      ]
    });

    await alert.present();
  }

  async deliveredAlert() {
    const alert = await this.alertController.create({
      header: 'Delivered',
      message: 'Order was delivered',
      cssClass: 'order-alert'
    })

    await alert.present();
  }
}
