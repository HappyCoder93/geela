import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Venue } from '../models/Venue';

@Injectable({
  providedIn: 'root'
})

export class VenueService {

  constructor(private firestore: AngularFirestore) { }

  // get all venues from Firestore (collection venue)
  getVenues(locationId): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue', ref=>ref.where("location_id", "==", locationId)).valueChanges();
  }
}
