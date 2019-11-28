import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from '../../../../shared/models/Venue';
import { LocationService } from '../../../../shared/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})

export class VenuePage implements OnInit {
  public title: string = "Venues";
  public param: number;
  public venues$: Observable<Venue[]>;

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.getVenues();
  }

  getVenues() {
    this.venues$ = this.locationService.getVenues();
  }

  goToRestaurant(venue_id: number) {
    this.router.navigateByUrl(`menu/order/venue/${venue_id}`);
  }
}
