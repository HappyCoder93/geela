import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public user$: Observable<User>
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.user$ = this.authService.getUserData();
  }
}
