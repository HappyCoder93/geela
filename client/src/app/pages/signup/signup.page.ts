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

  public user: SignupUser = {
    email: "",
    password: "",
    retypePassword: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  signup(user: SignupUser) {
    this.authService.signupWithEmail(user);
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
