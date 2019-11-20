import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private firestore: AngularFirestore) { }

  
  getFood(): Observable<Item[]> {
    return this.firestore.collection<Item>('items', ref => ref.where('food', 'array-contains', true)).valueChanges(); 
  }

  getDrinks(): Observable<Item[]> {
    return this.firestore.collection<Item>('items', ref => ref.where('drinks', 'array-contains', true)).valueChanges();
  }
}