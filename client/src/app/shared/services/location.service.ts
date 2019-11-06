import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from '../models/Location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private firestore: AngularFirestore) { }

  // get locations from Firestore
  public getLocations(): Observable<Location[]> {
    return this.firestore.collection<Location>('location').valueChanges();
  }
}
