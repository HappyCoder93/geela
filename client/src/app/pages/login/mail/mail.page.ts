import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],  
})

export class MailPage implements OnInit {
  public btnText: string = "Login";
  public color: string = 'primTxtColor';

  // object user with properties email and password
  public user: User = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthenticationService, public toastController: ToastController, private router: Router) { }

  ngOnInit() { }

  // method login (authService.emailLogin)
  login(user: User) {
     this.authService.emailLogin(user).then(() => {
        if(user.email == "" || user.password == "") {
          this.toastMessage();  // show toast message, if email or password field is empty
        }
        else if(!this.authService.isValidLogin) {
          this.color = 'red'  // set text color of item red, if email password combination is not valid (isValidLogin = false)
        }
        else {
          this.router.navigateByUrl("menu");  // if login is valid, user will be directed to home
        }
        console.log(this.authService.isValidLogin);
     });
  }

  async toastMessage() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Email and password required',
      duration: 1000 // length of toast is 1000 milliseconds (1 second)
    });

    toast.present();
  }
}
