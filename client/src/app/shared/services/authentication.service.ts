import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/User';

// The authentication.service.ts contains the Firebase methods for authentication (Google, Facebook & Email).

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public isValidLogin: boolean;

  constructor(private afAuth: AngularFireAuth) { }

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
}
