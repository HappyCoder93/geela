import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/Product';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
 
const ORDER_KEY = 'order';
const TOTAL_PRICE = 'total';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  public order_id: number;
  public totalPrice: number;
  public user_id: string;
  public date: string;
  public recentDate: string;
  public difference: number;

  constructor(private storage: Storage, private firestore: AngularFirestore) { 
    this.getPrice().then(price => {
      this.totalPrice = price;
    });
  }

  // CRUD (without UPDATE) for Storage ORDER_KEY
  addProduct(product: Product) {

    // create unique product_id for method deleteProduct()
    product.cart_id = Date.now();

    this.storage.get(ORDER_KEY).then((products: Product[]) => {
      if(products) {
        // calculation of total price
        this.totalPrice = this.totalPrice + product.price;
        this.addPrice(this.totalPrice);
        
        products.push(product);
        return this.storage.set(ORDER_KEY, products);
      }
      else {
        // instructions if Storage ORDER_KEY does not exist and method addProduct() is called for the first time
        this.totalPrice = this.totalPrice + product.price;
        this.addPrice(this.totalPrice);

        return this.storage.set(ORDER_KEY, [product]);
      }
    });
  }

  // return all products within Storage ORDER_KEY
  getProducts() {
    return this.storage.get(ORDER_KEY);
  }

  // delete product with unique product_id
  async deleteProduct(cart_id: number) {
    await this.storage.get(ORDER_KEY).then((products: Product[]) => {
      if(!products || products.length === 0) {
        return null;
      }
      
      let toKeep: Product[] = [];

      for(let i of products) {
        if(i.cart_id !== cart_id) {
          toKeep.push(i);
        }
        else {
          // calculation of total price  
          this.totalPrice = this.totalPrice - i.price;
          this.addPrice(this.totalPrice);
        }
      }
      return this.storage.set(ORDER_KEY, toKeep);
    });
  }

  // add total price of products to Storage TOTAL_PRICE
  addPrice(price: number) {
    this.storage.get(TOTAL_PRICE).then((totalPrice: number) => {
      totalPrice = parseFloat(price.toFixed(2));
      return this.storage.set(TOTAL_PRICE, totalPrice);
    })
  }

  // return the total price of Storage TOTAL_PRICE
  getPrice() {
    return this.storage.get(TOTAL_PRICE);
  }

  // createOrderDocument (collection order) create a new order document for Firestore
  createOrderDocument(restaurant_id: string, products: Product[], totalPrice: number) {
    this.order_id = Date.now();
    this.createDate();
  
    this.storage.get('uid').then(user_id => {
      this.user_id = user_id;

      this.firestore.collection('order').doc<Order>(`${this.order_id}`).set({
        products: products,
        price: totalPrice,
        status: "ordered",
        date: this.date,
        user_id: this.user_id,
        restaurant_id: restaurant_id
      });
    });

    this.storage.set(ORDER_KEY, []);
    this.storage.set(TOTAL_PRICE, 0);
  }

  getOrder(user_id: string): Observable<Order[]> {
    return this.firestore.collection<Order>('order', ref => ref.where('user_id', '==', user_id)
      .where('status', '==', 'ordered')).valueChanges();
  }

  getRecentOrder(user_id: string): Observable<Order[]> {
    return this.firestore.collection<Order>('order', ref => ref.where('user_id', '==', user_id).orderBy('date', 'desc').limit(1)).valueChanges();
  }

  createDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    this.date = mm + '/' + dd + '/' + yyyy;
  }

  checkRecentDate(date: string) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    this.recentDate = mm + '/' + dd + '/' + yyyy;

    let splitString =  date.split("/", 1);
    let tmpValue = parseInt(splitString[0]);

    return parseInt(mm) % tmpValue;
  }
}
