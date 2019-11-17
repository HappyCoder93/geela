import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../../shared/models/Profile';
import { HomeButton } from '../../../shared/models/HomeButton';
import { Storage } from '@ionic/storage';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public uid: string;
  public profile$: Observable<Profile>

  public buttons: HomeButton[] = [
    {
      title: 'Make Order',
      url: '/menu/order/venue',
      icon: 'add'
    },
    {
      title: 'Show Order',
      url: '',
      icon: 'eye'
    }
  ]
  
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
}
