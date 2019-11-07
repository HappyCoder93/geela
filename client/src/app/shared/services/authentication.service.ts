import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from './toast.service';
import { User } from '../models/User';
import { SignUp } from '../models/SignUp';

// The authentication.service.ts contains the Firebase methods for authentication (Google, Facebook & Email).

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public isValidLogin: boolean;
  public isValidSignUp: boolean;

  constructor(private afAuth: AngularFireAuth, private toastService: ToastService) { }

  // method to sign in with email and password
  async emailLogin(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if(res.user) {
          console.log("Login successful!");
          this.isValidLogin = true;
        }
      })
      .catch(err => {
        console.log(err);
        this.isValidLogin = false;
      });
  }

  // method to sign up with email and password
  async emailSignUp(user: SignUp) {
    if(user.retypePassword !== user.password) {
      this.toastService.unequalPasswords(); // password and retype password are not equal
      return false;
    }
    else {
      return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        console.log("Sign Up successful!");
        this.isValidSignUp = true;
      })
      .catch(err => {
        console.log(err);
        this.isValidSignUp = false;
      })
    }
  }
}
