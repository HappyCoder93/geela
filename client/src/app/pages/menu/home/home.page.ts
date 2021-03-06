import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../../shared/models/Profile';
import { HomeButton } from '../../../shared/models/HomeButton';
import { Storage } from '@ionic/storage';
import { UserService } from '../../../shared/services/user.service';
import { OrderService } from '../../../shared/services/order.service';
import { Order } from '../../../shared/models/Order';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public user_id: string;
  public profile$: Observable<Profile>;
  public order$: Observable<Order[]>;
  public deliveredOrder$: Observable<Order[]>;
  public length: number;
  public isEmptyOrders: boolean;
  public date: string;
  public status: string;

  public buttons: HomeButton[] = [
    {
      title: 'Make Order',
      url: '/menu/order',
      icon: 'add',
      class: 'make-order'
    },
    {
      title: 'Show Order',
      url: '/menu/show-order',
      icon: 'eye',
      class: 'show-order'
    }
  ]
  
  constructor(
    private storage: Storage, 
    private userService: UserService, 
    private orderService: OrderService,
    private alertService: AlertService
  ) { }

    // slider configuration
    sliderConfig = {
      centeredSlides: true,
      slidesPerView: 2
    }

  ngOnInit() {
    this.getProfile();
    this.getOrder();
  }

  async getProfile() {
    await this.storage.get('uid').then(user_id => {
      this.user_id = user_id;
    });

    this.profile$ = this.userService.getProfile(this.user_id);
  }

  getOrder() {
    this.storage.get('uid').then(user_id => {
      this.user_id = user_id;
      this.order$ = this.orderService.getRecentOrder(this.user_id);
    
      this.order$.subscribe(order => {
        this.length = order.length;
        this.status = order[0].status;

        if(this.length != 0) {
          this.date = order[order.length - 1].date; 

          if(this.status == 'delivered') {
            this.alertService.deliveredAlert();
          }
        }

        if(this.length == 0 || this.orderService.checkRecentDate(this.date) > 0) {
          this.isEmptyOrders = true;
        }
        else {
          this.isEmptyOrders = false;
        }
      });
    });
  }
}
