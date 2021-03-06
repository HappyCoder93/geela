import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from '../../shared/models/Profile';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user_id: string;

  constructor(
      private firestore: AngularFirestore, 
      private fireAuth: AngularFireAuth, 
      private toastService: ToastService,
      private router: Router,
      private storage: Storage
    ) { }

  // profile document will be created right after sign up
  createProfileDocument(uid: string) {
    this.firestore.collection('profile').doc<Profile>(`${uid}`).set({
      user_id: `${uid}`,
      firstname: "Jon",
      lastname: "Doe",
      image: "../../assets/icon/avatar.svg"
    });
  }

  getProfile(uid: string) {
    return this.firestore.doc<Profile>(`profile/${uid}`).valueChanges();
  }

  updateProfile(uid: string, firstname: string, lastname: string) {
    this.firestore.collection('profile').doc<Profile>(`${uid}`).update({
      firstname: firstname,
      lastname: lastname,
      image: "../../assets/icon/avatar.svg"
    }).then(() => {
      this.toastService.updatedProfile();
    }).catch(err => {
      console.log(err);
    });
  }

  logout() {
    this.fireAuth.auth.signOut().then(() => {
      console.log('User logged out');

      this.storage.get('uid').then(() => {
        this.storage.clear();
      });

      this.router.navigateByUrl('/login');
    });
  }

  // deleteAccount delets authenticated user and collection profile
  deleteAccount() {
    this.fireAuth.auth.currentUser.delete().then(() => {
      console.log('User deleted');

      this.storage.get('uid').then(user_id => {
        this.user_id = user_id;
        this.firestore.collection("profile").doc(`${this.user_id}`).delete();
        this.storage.clear();
      })

      this.router.navigateByUrl('/login');
    })
  }
}  
