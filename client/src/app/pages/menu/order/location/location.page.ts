import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../../../../shared/models/Location';
import { LocationService } from '../../../../shared/services/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {
  public title: string = "Location";
  public locations$: Observable<Location[]>;

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locations$ = this.locationService.getLocations();
  }

  // go to page venue
  goToVenue() {
    this.router.navigateByUrl('/menu/order/venue');
  }
}
