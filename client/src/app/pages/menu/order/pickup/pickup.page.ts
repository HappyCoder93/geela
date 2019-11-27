import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {
  public title: string = "Pick-up Points";
  public image: string = "https://firebasestorage.googleapis.com/v0/b/geela-9292c.appspot.com/o/venue_maps%2Fcorke_park_map.png?alt=media&token=aaa241fc-ccf0-4a3c-914e-5452b6b03930"
  public color1: string = "rgba(0,0,0,0.5)";
  public color2: string = "rgba(0,0,0,0.5)";

  select1() {
    this.color1 = "red";
    this.color2 = "rgba(0,0,0,0.5)";
  }

  select2() {
    this.color1 = "rgba(0,0,0,0.5)";
    this.color2 = "red";
  }

  constructor() { }

  ngOnInit() {
  }

}
