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

  // erro codes of createUserWithEmailAndPassword and signInWithEmailAndPassword
  public errCode = {
    invalidEmail: 'auth/invalid-email',
    userNotFound: 'auth/user-not-found',
    userAlreadyExists: 'auth/email-already-in-use',
    weakPassword: 'auth/weak-password'
  }

  constructor(private auth: AngularFireAuth, private toastService: ToastService, private router: Router) { 
    this.user = this.auth.user;
  }

  // createUserWithEmailAndPassword
  async signupWithEmail(user: SignupUser){
    await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          // if signup was successful - user will be forwarded to page profile
          this.router.navigateByUrl('/menu/account/profile');
        }
      }).catch(err => {
        console.log(err);

        if(err.code == this.errCode.invalidEmail || err.code == this.errCode.weakPassword) {
          this.toastService.invalidSignupLogin('signup');
        }
        else if(err.code == this.errCode.userAlreadyExists) {
          this.toastService.userAlreadyExists();
        }

        // set input color to red
        this.color = 'red';
      });
  }

  // signInWithEmailAndPassword
  async loginWithEmail(user: LoginUser) {
    await this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          // if login was successful - user will be forwarded to page home
          this.router.navigateByUrl('/menu/home');
        }
      }).catch(err => {
        console.log(err);

        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('login');
        }
        else if(err.code == this.errCode.userNotFound) {
          this.toastService.userNotFound();
        }

        // set input color to red
        this.color = 'red';
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
