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
  
  // get food from Firestore
  getFood(): Observable<Food[]> {
    return this.firestore.collection<Food>('items', ref => ref.where('food', 'array-contains', true)).valueChanges(); 
  }

  // get drinks from Firestore
  getDrinks(): Observable<Drink[]> {
    return this.firestore.collection<Drink>('items', ref => ref.where('drinks', 'array-contains', true)).valueChanges();
  }
}
