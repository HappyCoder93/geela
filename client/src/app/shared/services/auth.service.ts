import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { LoginUser } from '../models/LoginUser';
import { SignupUser } from '../models/SignupUser';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: Observable<User>

  public errCode = {
    invalidEmail: 'auth/invalid-email'
  }

  constructor(private auth: AngularFireAuth, private toastService: ToastService, private router: Router) { 
    this.user = this.auth.user;
  }

  // createUserWithEmailAndPassword
  async signupWithEmail(user: SignupUser){
    await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {

        }
      }).catch(err => {
        console.log(err);

        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('signup');
        }
      });
  }

  // signInWithEmailAndPassword
  async loginWithEmail(user: LoginUser) {
    await this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          this.router.navigateByUrl('/menu');
        }
      }).catch(err => {
        console.log(err);

        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('login');
        }
      });
  }

  // getUserData returns an Observable of User (AngularFireAuth.user)
  getUserData(): Observable<User> {
    return this.auth.user;
  }
}
