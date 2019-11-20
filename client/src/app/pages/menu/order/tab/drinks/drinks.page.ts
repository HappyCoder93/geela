import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../../../shared/models/Item';
import { OrderService } from '../../../../../shared/services/order.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})

export class DrinksPage implements OnInit {
  public drinks$: Observable<Item[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks() {
    this.drinks$ = this.orderService.getDrinks();
  }
}
