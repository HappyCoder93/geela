import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Location } from '../models/Location';
import { Venue } from '../models/Venue';

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

  getVenues(): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue', ref => ref.where('location_id', '==', 2)).valueChanges();
  }
}
