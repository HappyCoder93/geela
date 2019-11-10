import { Component, OnInit } from '@angular/core';
import { LoginButton } from '../../shared/models/LoginButton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  public buttons: LoginButton[] = [
    {
      title: 'Google',
      icon: 'logo-google',
      url: '',
      class: 'btn-google'
    },
    {
      title: 'Facebook',
      icon: 'logo-facebook',
      url: '',
      class: 'btn-facebook'
    },
    {
      title: 'Email',
      icon: 'mail',
      url: '/login/mail',
      class: 'btn-email'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  goToSignupPage() {
    this.router.navigateByUrl('/signup');
  }
}
