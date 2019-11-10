import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../shared/services/location.service';
import { Observable } from 'rxjs';
import { Venue } from '../../../../shared/models/Venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})

export class VenuePage implements OnInit {
  public title: string = "Venue";
  public venues$: Observable<Venue[]>;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getVenues();
  }

  /* get locations from locationService */
  getVenues() {
    this.venues$ = this.locationService.getVenues();
  }
}
