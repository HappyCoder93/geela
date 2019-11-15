import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Profile } from '../../shared/models/Profile';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore, private toastService: ToastService) { }

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

  // create document of collection profile with default attributes firstname, lastname and image
  createProfileDocument(uid: string) {
    this.firestore.collection('profile').doc<Profile>(`${uid}`).set({
      firstname: "Jon",
      lastname: "Doe",
      image: "../../assets/icon/avatar.svg"
    }).catch(err => {
      console.log(err);
    });
  }
}  
