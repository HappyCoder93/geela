import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Profile } from '../../shared/models/Profile';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore, private toastService: ToastService) { }

  // create a 
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
}  
