import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { HomeButton } from '../../../shared/models/HomeButton';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public user$: Observable<User>

  public buttons: HomeButton[] = [
    {
      title: 'Make Order',
      url: '/menu/order/location',
      icon: 'add'
    },
    {
      title: 'Show Order',
      url: '',
      icon: 'eye'
    }
  ]
  
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.user$ = this.authService.getUserData();
  }
}
