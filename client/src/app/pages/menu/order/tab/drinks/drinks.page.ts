import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../../shared/services/item.service';
import { Observable } from 'rxjs';
import { Drink } from '../../../../../shared/models/Drink';
import { OrderService } from '../../../../../shared/services/order.service';
import { Product } from '../../../../../shared/models/Product';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})

export class DrinksPage implements OnInit {
  public drinks$: Observable<Drink[]>;

  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(private itemService: ItemService, private orderService: OrderService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks() {
    this.drinks$ = this.itemService.getDrinks();
  }

  addProduct(product: Product) {
    // product_id will be exchanged to Date.now()
    product.product_id = Date.now();
    this.orderService.addProduct(product);
  }
}
