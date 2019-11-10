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

  // get locations from locationService
  getLocations() {
    this.locations$ = this.locationService.getLocations();
  }

  // goToVenuePage with parameter location (linked attribute)
  goToVenuePage(name: string) {
    this.router.navigateByUrl(`/venue/${name}`);
  }
}
