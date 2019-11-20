import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private firestore: AngularFirestore) { }
  
  getFood(): Observable<Food[]> {
    return this.firestore.collection<Food>('items', ref => ref.where('food', 'array-contains', true)).valueChanges(); 
  }

  /*
  getDrinks(): Observable<any[]> {
    return this.firestore.collection<any>('items', ref => ref.where('drinks', 'array-contains', true)).valueChanges();
  }
  */
}
