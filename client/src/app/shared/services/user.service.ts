import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Profile } from '../../shared/models/Profile';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getProfile(uid: string) {
    return this.firestore.doc<Profile>(`profile/${uid}`).valueChanges();
  }

  /*
  updateProfileDocument(firstname: string, lastname: string) {
    this.firestore.collection('profile').doc<Profile>(`${uid}`)  
  }
  */

  // create document of collection profile with default attributes firstname, lastname and image
  createProfileDocument(uid: string) {
    this.firestore.collection('profile').doc<Profile>(`${uid}`).set({
      firstname: "empty",
      lastname: "empty",
      image: "../../assets/icon/avatar.svg"
    });
  }
}  
