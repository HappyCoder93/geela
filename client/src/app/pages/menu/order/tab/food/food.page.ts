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

  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(private itemService: ItemService, private orderService: OrderService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    this.food$ = this.itemService.getFood();
  }

  addProduct(product: Product) {
    // product_id will be exchanged to Date.now(), because otherwise same products will have the same product_id
    product.product_id = Date.now();
    this.orderService.addProduct(product);
  }
}

