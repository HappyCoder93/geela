import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  public btnTxtLogout: string = "Logout";
  public btnTxtDelete: string = "Delete";

  constructor(private userService: UserService) { }

  ngOnInit() { }

  logout() {
    this.userService.logout();
  }

  delete() {
    this.userService.deleteAccount();
  }
}
