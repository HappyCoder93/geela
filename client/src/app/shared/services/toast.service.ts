import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  // toast shows up when input email, password or retype password are empty
  async invalidSignupLogin(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: `Invalid ${message}`,
      duration: 1500 // length of toast 1500 milliseconds
    });

    toast.present();
  }

  // toast shows up when cannot be found (user has not signed up)
  async userNotFound() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User not found',
      duration: 1500
    });

    toast.present();
  }
}
