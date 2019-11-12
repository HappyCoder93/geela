import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../shared/models/Profile';
import { UserService } from '../../../../shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  public btnSaveText: string = "Save";
  public profile$: Observable<Profile>;

  public profile: Profile = {
    firstname: "",
    lastname: ""
  }

  constructor(private userService: UserService) {
    this.getProfile();
  }
  
  ngOnInit() { }

  ionViewWillEnter() {
    this.getProfile();
  }

  getProfile() {
    this.profile$ = this.userService.getProfile();
  }
}
