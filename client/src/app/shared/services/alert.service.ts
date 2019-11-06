import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private alertController: AlertController, private router: Router) { }

  async signupSuccessAlert() {
    const alert = await this.alertController.create({
      message: 'Signup successful',
      cssClass: 'signup-alert',
      buttons: [
        { 
          text: 'Login',
          handler: () => {
            this.goToLogin();
          }
        }  
      ]
    });

    alert.present();
  }

  // go to login (URL: /login/email)
  goToLogin() {
    this.router.navigateByUrl("/login/email");
  }
}
