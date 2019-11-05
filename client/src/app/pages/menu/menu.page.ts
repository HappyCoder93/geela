import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  public title: string = "Menu";

  public pages = [
    { 
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    }
  ]

  constructor() { }

  ngOnInit() { }
}
