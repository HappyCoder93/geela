import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import models from shared/models
import { Location } from '../models/Location';
import { Venue } from '../models/Venue';
import { Restaurant } from  '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private firestore: AngularFirestore) { }

  // get all locations from Firestore (collection: location)
  getLocations(): Observable<Location[]> {
    return this.firestore.collection<Location>('location').valueChanges();
  }

  /* get all venues from Firestore (collection venue)
  getVenues(locationId: number): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue', ref=>ref.where("location_id", "==", locationId)).valueChanges();
  }
  */

  // get all venues (collection venue)
  getVenues(): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue', ref => ref.where('location_id', '==', 2)).valueChanges();
  }

  // get all restauraunts (collection restaurant)
  getRestaurants(): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant').valueChanges();
  }
}
