import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../shared/services/location.service';
import { Observable } from 'rxjs';
import { Venue } from '../../../../shared/models/Venue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})

export class VenuePage implements OnInit {
  public title: string = "Venue";
  public param: number;
  public venues$: Observable<Venue[]>;

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit() {
    //this.getVenues();
  }

  /* get locations from locationService
  getVenues() {
    // get parameter id from URL
    this.activatedRoute.paramMap.subscribe(param => {
      this.param = +param.get('id');
    });

    this.venues$ = this.locationService.getVenues(this.param);
  }
  */
}
