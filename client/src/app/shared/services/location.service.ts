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

  // get all the locations from Firestore (returns an observable of type Location[])
  getLocations(): Observable<Location[]> {
    return this.firestore.collection<Location>('location').valueChanges();
  }

  // get all the venues from Firestore (returns an observable of type Venue[])
  getVenues(): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue').valueChanges();
  }
}
 