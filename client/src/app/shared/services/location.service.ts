import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Venue } from '../models/Venue';
import { Restaurant } from  '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private firestore: AngularFirestore) { }

  // get all venues
  getVenues(): Observable<Venue[]> {
    return this.firestore.collection<Venue>('venue').valueChanges();
  }

  // get all restauraunts
  getRestaurants(restaurant_id: number): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('venues', 'array-contains', restaurant_id)).valueChanges();
  }
}
