import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../shared/models/Order';
import { Storage } from '@ionic/storage';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.page.html',
  styleUrls: ['./show-order.page.scss'],
})

export class ShowOrderPage implements OnInit {
  public user_id: string;
  public order$: Observable<Order[]>;
  public length: number;
  public isEmptyOrders: boolean;

  constructor(private storage: Storage, private orderService: OrderService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.storage.get('uid').then(user_id => {
      this.user_id = user_id
      this.order$ = this.orderService.getOrder(this.user_id);

      this.order$.subscribe(order => {
        this.length = order.length;
        
        if(this.length == 0) {
          this.isEmptyOrders = true;
        }
        else {
          this.isEmptyOrders = false;
        }
      })
    });
  }
}
