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

  // get all locations from Firestore (collection location)
  getLocations(): Observable<Location[]> {
    return this.firestore.collection<Location>('location').valueChanges();
  }
}
