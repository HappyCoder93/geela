import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../shared/services/order.service';
import { Observable } from 'rxjs';
import { Item } from '../../../../../shared/models/Item';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})

export class FoodPage implements OnInit {
  public food$: Observable<Item[]>;

  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    this.food$ = this.orderService.getFood();
  }
}
