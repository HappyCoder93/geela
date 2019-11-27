import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../shared/models/Profile';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  public btnSaveText: string = "Save";
  public uid: string;
  public profile$: Observable<Profile>;

  public profile: Profile = {
    user_id: "",
    firstname: "",
    lastname: "",
    image: "",
  }

  constructor(private storage: Storage, private userService: UserService) { }
  
  ngOnInit() { 
    this.getProfile();
  }
  
  async getProfile() {
    await this.storage.get('uid').then(uid => {
      this.uid = uid;
    });
  
    this.profile$ = this.userService.getProfile(this.uid);
  }

  updateProfile() {
    this.userService.updateProfile(this.uid, this.profile.firstname, this.profile.lastname);
  }
}
