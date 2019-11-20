import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { Item } from '../../../../../shared/models/Food';
import { ItemService } from '../../../../../shared/services/item.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})

export class DrinksPage implements OnInit {
  public drinks$: Observable<any[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    //this.getDrinks();
  }

  /*
  getDrinks() {
    this.drinks$ = this.orderService.getDrinks();
  }
  */
}
