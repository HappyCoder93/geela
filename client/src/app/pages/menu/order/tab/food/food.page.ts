import { Component, OnInit } from '@angular/core';
import { TabPage} from '../../tab/tab.page';
import { Observable } from 'rxjs';
import { Food } from '../../../../../shared/models/Food';
import { OrderService } from '../../../../../shared/services/order.service';
import { Product } from '../../../../../shared/models/Product'; 

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})

export class FoodPage implements OnInit {
  public food$: Observable<Food[]>;

  // slider configuration
  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(
      private tabPage: TabPage,
      private orderService: OrderService
    ) { }

  ngOnInit() {
    this.getFood();
  }

  // get food from TabPage method getFood()
  getFood() {
    this.food$ = this.tabPage.getFood();
  }

  addProduct(product: Product) {
    this.orderService.addProduct(product);
  }
}

