import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { SignupUser } from '../../shared/models/SignupUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  public btnText: string = "Sign Up";
  public color: string;

  public user: SignupUser = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  // lifecycle hook to clear the input fields and color after page transition
  ionViewWillEnter() {
    this.user.email = "";
    this.user.password = "";
    this.color = '#292929';
  }

  signup(user: SignupUser) {
    this.authService.signupWithEmail(user).then(() => {
      this.color = this.authService.color;
    });
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
