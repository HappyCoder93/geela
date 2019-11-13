import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
    weakPassword: 'auth/weak-password'
  }

  constructor(
      private fireAuth: AngularFireAuth,
      private firestore: AngularFirestore,
      private userService: UserService,
      private storage: Storage,
      private toastService: ToastService, 
      private router: Router
    ) { 
  }

  // createUserWithEmailAnd Password
  async signupWithEmailAndPassword(user: AuthUser) {
    await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          // if user successfully signed up -> new document of collection profile (with uid) will be created
          this.userService.createProfileDocument(res.user.uid);

          this.saveUserID(res.user.uid);
          
          // user will also be forwarded to page profile (URL: /menu/account/profile)
          this.router.navigateByUrl('/menu/account/profile');
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

        // set color of input fields red after invalid signup
        this.color = 'red';
      });
  }

  // signInWithEmailAndPassword
  async loginWithEmailAndPassword(user: AuthUser) {
    await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          this.storage.clear().then(() => {
            this.saveUserID(res.user.uid);
          });

          // if user successfully logged in -> user will be forwarded to page home (URL: /menu/home)
          this.router.navigateByUrl('/menu/home');
        }
      }).catch(err => {
        console.log(err);

        // catch different error codes
        if(err.code == this.errCode.invalidEmail) {
          this.toastService.invalidSignupLogin('login');
        }
        else if(err.code == this.errCode.userNotFound) {
          this.toastService.userNotFound();
        }

        // set color of input fields red after invalid login
        this.color = 'red';
      });
  }

  saveUserID(uid: string) {
    this.storage.set('uid', uid);
  }
}
