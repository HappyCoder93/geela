import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  // toast will show up when input fields email and password are empty (pages signup and login)
  async invalidSignupLogin(message: string) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: `Invalid ${message}`,
      duration: 1500
    });

    toast.present();
  }

   // toast will show up when user already exists (email addresses are equal)
  async userAlreadyExists() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User already exists',
      duration: 1500
    });

    toast.present();
  }

  // toast will show up when user cannot be found (user does not exist)
  async userNotFound() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User not found',
      duration: 1500
    });

    toast.present();
  }

  // toast will show up when profile (firstname, lastname and image) was updated
  async updatedProfile() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Profile updated',
      duration: 1500
    });

    toast.present();
  }
}
