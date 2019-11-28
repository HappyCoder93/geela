import { Component, OnInit } from '@angular/core';
import { TabPage } from '../tab.page';
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

  // slider configuration
  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(private tabPage: TabPage, private orderService: OrderService) { }

  ngOnInit() {
    this.getDrinks();
  }

  // get drinks from TabPage method getDrinks()
  getDrinks() {
    this.drinks$ = this.tabPage.getDrinks();
  }

  addProduct(product: Product) {
    this.orderService.addProduct(product);
  }
}
