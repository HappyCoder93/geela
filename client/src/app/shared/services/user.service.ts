import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Profile } from '../../shared/models/Profile';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public profileReference: AngularFirestoreCollection<Profile>
  public userID: string;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  getProfile(): Observable<Profile> {
    this.getUser();
    return this.firestore.doc<Profile>(`profile/${this.userID}`).valueChanges();
  }

  getUser() {
    this.auth.authState.subscribe(auth => {
      this.userID = auth.uid;
    });
  }

  createProfile(id: string) {
    this.firestore.collection('profile').doc(`${id}`).set({
      firstname: "empty",
      lastname: "empty"
    });
  }
}  
