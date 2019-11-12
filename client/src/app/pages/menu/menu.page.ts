import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  public title: string = "Menu";

  public pages: Menu[] = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Account',
      url: '/menu/account',
      icon: 'person'
    }
  ]

  constructor() { }

  ngOnInit() { }
}
