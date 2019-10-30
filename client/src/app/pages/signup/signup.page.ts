import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  public btnText: string = "Sign Up";
  public color: string = 'primTxtColor';

  // object user with properties email and password
  public user: User = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthenticationService, private toastService: ToastService) { }

  ngOnInit() { }


  signUp(user: User) {
    this.authService.emailSignUp(user).then(() => {
      if(user.email == "" || user.password =="") {
        this.toastService.emailPasswordToast();
      }
      else if(!this.authService.isValidSignUp){
        this.color = 'red'; // set text color of item red, if email password combination is not valid (isValidSignUp = false)
      }
      console.log(this.authService.isValidSignUp);
    })
  }

  toastMessage() {
    this.toastService.emailPasswordToast();
  }
}
