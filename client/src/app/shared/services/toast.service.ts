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

    await toast.present();
  }
  
   // user already exists (user wants to sign up with same email address)
  async userAlreadyExists() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User already exists',
      duration: 1500
    });

    await toast.present();
  }

  // user cannot be found (user does not exist)
  async userNotFound() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User not found',
      duration: 1500
    });

    await toast.present();
  }

  async signUpSuccess() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Sign up successful',
      duration: 1500
    });

    await toast.present();
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
}
