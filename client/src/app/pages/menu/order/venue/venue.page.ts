import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from '../../../../shared/models/Venue';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../../../shared/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})

export class VenuePage implements OnInit {
  public title: string = "Venue";
  public param: number;
  public venues$: Observable<Venue[]>;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.getVenues();
  }

  /* get venues from venueService */
  getVenues() {
    // get parameter id from URL
    this.activatedRoute.paramMap.subscribe(param => {
      this.param = +param.get('id');
    });

    this.venues$ = this.locationService.getVenues();
  }

  // navigate to URL: venue/:id with parameter venue_id
  goToRestaurantPage(id: number) {
    this.router.navigateByUrl(`menu/order/restaurants/${id}`);
  }
}
