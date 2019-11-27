import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../shared/services/location.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../../shared/models/Restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})

export class RestaurantPage implements OnInit {
  public title: string = "Restaurants";
  public restaurants$: Observable<Restaurant[]>;

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurants$ = this.locationService.getRestaurants();
  }

  goToItems(restaurant_id: number) {
    this.router.navigateByUrl(`menu/order/restaurant/${restaurant_id}`);
  }
}
