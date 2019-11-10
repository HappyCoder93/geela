import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { LoginUser } from '../../../shared/models/LoginUser';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})

export class MailPage implements OnInit {
  public btnText: string = "Login";

  public user: LoginUser = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login(user: LoginUser) {
    this.authService.loginWithEmail(user);
  }

  goToSignupPage() {
    this.router.navigateByUrl('/signup');
  }
}
