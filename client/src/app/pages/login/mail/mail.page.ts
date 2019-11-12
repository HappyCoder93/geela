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
  public color: string;

  public user: LoginUser = {
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

  login(user: LoginUser) {
    this.authService.loginWithEmail(user).then(() => {
      this.color = this.authService.color;
    });
  }

  goToSignupPage() {
    this.router.navigateByUrl('/signup');
  }
}
