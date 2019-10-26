import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public buttons = [
    {
      title: 'Google',
      icon: 'logo-google',
      class: 'btn-google'
    },
    {
      title: 'Facebook',
      icon: 'logo-facebook',
      class: 'btn-facebook'
    },
    {
      title: 'Email',
      icon: 'mail',
      url: 'login/email',
      class: 'btn-email'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  goToSignUp() {
    this.router.navigateByUrl('/signup');
  }

  goToLogin(url: string) {
    this.router.navigateByUrl(url);
  }
}
