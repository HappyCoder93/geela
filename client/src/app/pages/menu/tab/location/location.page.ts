import { Component, OnInit } from '@angular/core';
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

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  public getLocations() {
    this.locations$ = this.locationService.getLocations();
  }
}
