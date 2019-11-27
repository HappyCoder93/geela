import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../../shared/services/item.service';
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

  constructor(private itemService: ItemService, private orderService: OrderService) { }

  ngOnInit() {
    this.getFood();
  }

  // call method getFood() of item.service.ts to get all food
  getFood() {
    this.food$ = this.itemService.getFood();
  }

  // call method addProduct() of order.service.ts to add food to Storage
  addProduct(product: Product) {
    this.orderService.addProduct(product);
  }
}

