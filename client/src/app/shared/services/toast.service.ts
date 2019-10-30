import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }

  async emailPasswordToast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Email and password required',
      duration: 1000 // length of toast is 1000 milliseconds (1 second)
    }); 
    toast.present();
  }
}
