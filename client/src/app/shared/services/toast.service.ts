import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  // fields email and password are empty
  async invalidSignupLogin(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: `Invalid ${message}`,
      duration: 1500
    });

    toast.present();
  }
  
   // user already exists (user have the same email address)
  async userAlreadyExists() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User already exists',
      duration: 1500
    });

    toast.present();
  }

  // user cannot be found (user does not exist)
  async userNotFound() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User not found',
      duration: 1500
    });

    toast.present();
  }

  // firstname, lastname and image were updated
  async updatedProfile() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Profile updated',
      duration: 1500
    });

    toast.present();
  }

  // order successful sent
  async orderSuccess() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Order sent',
      duration: 1500
    });

    toast.present();
  }
}
