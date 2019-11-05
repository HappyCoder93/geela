import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  // toast will show up, if input fields email, password and retype password are empty
  async emailPasswordToast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Email and password required',
      duration: 1000 // length of toast is 1000 milliseconds (1 second)
    }); 
    
    toast.present();
  }

  // toast will show up, if user does not exists
  async userNotExists() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'User does not exists',
      duration: 1000
    });

    toast.present();
  }

  // toast will show up, if password and retype password are not equal
  async unequalPasswords() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Passwords are not equal',
      duration: 1000
    });

    toast.present();
  }
}
