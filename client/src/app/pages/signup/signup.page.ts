import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AuthUser } from '../../shared/models/AuthUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  public btnText: string = "Sign Up";
  public color: string;

  public user: AuthUser = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  // clear input fields and color after page transition
  ionViewWillEnter() {
    this.user.email = "";
    this.user.password = "";
    this.color = '#292929';
  }

  signup(user: AuthUser) {
    this.authService.signupWithEmailAndPassword(user).then(() => {
      this.color = this.authService.color;
    });
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
