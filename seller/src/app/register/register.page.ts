import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  private register: UserOptions = { username: '', password: ''};
  private passwordConfirmation = '';
  private submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) { }

  onRegister(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      if (this.register.password != this.passwordConfirmation) {
        return;
      }
      this.userData.register(this.register.username);
      this.register.password = '';
      this.register.username = '';
      this.passwordConfirmation = '';
      this.submitted = false;
      this.router.navigateByUrl('/');
    }
  }
}
