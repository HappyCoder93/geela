import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  async invalidSignupLogin(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: `Invalid ${message}`,
      duration: 1000 // length of toast 1000 milliseconds
    });

    toast.present();
  }
}
