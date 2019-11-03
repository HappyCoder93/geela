import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../shared/models/SignUp';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  public btnText: string = "Sign Up";
  public color: string = "primTxtColor";
  public retypePassword: string;

  // object user with properties email and password
  public user: SignUp = {
    email: "",
    password: "",
    retypePassword: ""
  }

  constructor(private router: Router, private authService: AuthenticationService, private toastService: ToastService) { }

  ngOnInit() { }

  signUp(user: SignUp) {    
    this.authService.emailSignUp(user).then(() => {
      if(user.email == "" || user.password == "" || user.retypePassword == "") {
        this.toastService.emailPasswordToast();
      }
      else if(!this.authService.isValidSignUp) {
        this.color = 'red'; // set text color of item red, if email password combination is not valid (isValidSignUp = false)
      }
      console.log(this.authService.isValidSignUp);
    });
  }

  // go to login (URL: /login/email)
  goToEmailLogin() {
    this.router.navigateByUrl("/login/email");
  }

  toastMessage() {
    this.toastService.emailPasswordToast();
  }
}
