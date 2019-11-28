import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { AuthUser } from '../models/AuthUser';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: Observable<User>
  public color: string;

  // error codes of signupWithEmailAndPassword and loginWithEmailAndPassword
  public errCode = {
    invalidEmail: 'auth/invalid-email',
    userNotFound: 'auth/user-not-found',
    userAlreadyExists: 'auth/email-already-in-use',
    weakPassword: 'auth/weak-password',
    wrongPassword: 'auth/wrong-password'
  }

  constructor(
      private fireAuth: AngularFireAuth,
      private userService: UserService,
      private storage: Storage,
      private toastService: ToastService, 
      private router: Router
    ) { }

  // createUserWithEmailAnd Password
  async signupWithEmailAndPassword(user: AuthUser) {
    await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          this.color = '#292929';

          // if user successfully signed up -> new document of collection profile (with uid) will be created
          this.userService.createProfileDocument(res.user.uid);
          this.storage.set('uid', res.user.uid).then(() => {
            this.router.navigateByUrl('/login/mail');
          });
        }
      }).catch(err => {
        console.log(err);
        
        // catch different error codes
        if(err.code == this.errCode.invalidEmail || err.code == this.errCode.weakPassword) {
          this.toastService.invalidSignupLogin('signup');
        }
        else if(err.code == this.errCode.userAlreadyExists) {
          this.toastService.userAlreadyExists();
        }
        
        this.color = 'red';
      });
  }

  // signInWithEmailAndPassword
  async loginWithEmailAndPassword(user: AuthUser) {
    await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          this.color = '#292929';

          // clear storage and save uid to storage before forwarding to page home (URL: /menu/home)
          this.storage.clear().then(() => {
            this.storage.set('uid', res.user.uid).then(() => {
              this.router.navigateByUrl('/menu/home');
            });
          });
        }
      }).catch(err => {
        console.log(err);

        // catch errors (error codes)
        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('login');
        }
        else if(err.code == this.errCode.userNotFound) {
          this.toastService.userNotFound();
        }
        else if(err.code == this.errCode.wrongPassword) {
          this.toastService.invalidSignupLogin('login');
        }

        this.color = 'red';
      });
  }
}
