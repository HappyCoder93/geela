import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../shared/services/location.service';
import { Router } from '@angular/router';
import { Location } from '../../../../shared/models/Location';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {
  public title: string = "Location";
  public locations$: Observable<Location[]>;

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() { 
    this.getLocations();
  }

  // get locations fro location.service.ts
  getLocations() {
    this.locations$ = this.locationService.getLocations();
  }

  // navigate to URL: location/:id with parameter location_id
  goToVenuePage(id: number) {
    this.router.navigateByUrl(`menu/order/location/${id}`);
  }
}
