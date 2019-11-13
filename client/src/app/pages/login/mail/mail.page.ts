import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthUser } from '../../../shared/models/AuthUser';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})

export class MailPage implements OnInit {
  public btnText: string = "Login";
  public color: string;

  public user: AuthUser = {
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

  login(user: AuthUser) {
    this.authService.loginWithEmailAndPassword(user).then(() => {
      this.color = this.authService.color;
    });
  }

  goToSignupPage() {
    this.router.navigateByUrl('/signup');
  }
}
