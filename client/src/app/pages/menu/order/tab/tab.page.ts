import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../../shared/services/item.service';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { Drink } from 'src/app/shared/models/Drink';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})

export class TabPage implements OnInit {
  public param: number;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) { 
    this.activatedRoute.paramMap.subscribe(param => {
      this.param = +param.get('restaurant_id');
    });
  }

  ngOnInit() { }

  getFood(): Observable<Food[]> {
    return this.itemService.getFood(this.param);
  }

  getDrinks(): Observable<Drink[]> {
    return this.itemService.getDrinks(this.param);
  }
}
