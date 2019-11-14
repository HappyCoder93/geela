import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  
  public buttons = [
    {
      title: 'Logout',
      icon: '',
      class: 'btn-logout'
    },
    {
      title: 'Delete',
      icon: '',
      class: 'btn-delete'
    }
  ]

  constructor() { }

  ngOnInit() { }
}
