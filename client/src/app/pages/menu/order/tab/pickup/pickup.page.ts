import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../shared/services/order.service';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})

export class PickupPage implements OnInit {
  public colorOne: string = 'rgba(0,0,0,0.5)';
  public colorTwo: string = 'rgba(0,0,0,0.5)';
  public pickupStation: string;

  constructor(private orderService: OrderService) { }

  ngOnInit() { }

  selectOne() {
    this.orderService.setPickupStation('A');
    this.colorOne = 'red';
    this.colorTwo = 'rgba(0,0,0,0.5)';
  }

  selectTwo() {
    this.orderService.setPickupStation('B');
    this.colorOne = 'rgba(0,0,0,0.5)';
    this.colorTwo = 'red';
  }
}
