import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { LoginUser } from '../models/LoginUser';
import { SignupUser } from '../models/SignupUser';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: Observable<User>
  public color: string;

  public errCode = {
    invalidEmail: 'auth/invalid-email',
    userNotFound: 'auth/user-not-found'
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
          this.color = 'red';

          // check if password and retype password are equal
          if(user.password != user.retypePassword) {
            this.toastService.invalidSignupLogin('password and retype password');
          }
        }
      });
  }

  // signInWithEmailAndPassword
  async loginWithEmail(user: LoginUser) {
    await this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          this.router.navigateByUrl('/menu/home');
        }
      }).catch(err => {
        console.log(err);

        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('login');
          this.color = 'red';
        }
        else if(err.code == this.errCode.userNotFound) {
          this.toastService.userNotFound();
          this.color = 'red';
        }
      });
  }

  // signInWithGoogle (login in with a regular Google Account)
  async loginWithGoogle() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  // getUserData returns an Observable of type User (AngularFireAuth.user)
  getUserData(): Observable<User> {
    return this.auth.user;
  }
}
