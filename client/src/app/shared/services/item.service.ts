import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';
import { Drink } from '../../shared/models/Drink'

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private firestore: AngularFirestore) { }
   
  // get food with a specific restaurant_id
  getFood(restaurant_id: string): Observable<Food[]> {
    return this.firestore.collection<Food>('items', ref => ref.where('restaurant_id', '==', restaurant_id)).valueChanges();
  }

  // get drinks with a specific restaurant_id
  getDrinks(restaurant_id: string): Observable<Drink[]> {
    return this.firestore.collection<Drink>('items', ref => ref.where('restaurant_id', '==', restaurant_id)).valueChanges();
  }
}
