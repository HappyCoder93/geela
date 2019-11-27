import { Component, OnInit } from '@angular/core'
import { LocationService } from '../../../../shared/services/location.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../../shared/models/Restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})

export class RestaurantPage implements OnInit {
  public title: string = "Restaurants";
  public param: number;
  public restaurants$: Observable<Restaurant[]>;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.param = +param.get('venue_id');
    });

    this.restaurants$ = this.locationService.getRestaurants(this.param);
  }

  goToItems(restaurant_id: number) {
    this.router.navigateByUrl(`menu/order/restaurant/${restaurant_id}`);
  }
}
