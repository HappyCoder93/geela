import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/Product';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/Order';
 
const ORDER_KEY = 'order';
const TOTAL_PRICE = 'total';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  public order_id: number;
  public totalPrice: number;

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

  createDate() { 
    return [Date.prototype.getDay];
  }
  createOrderDocument(restaurant_id: number, products: Product[], totalPrice: number) {
    this.order_id = Date.now();

    this.firestore.collection('order').doc<Order>(`${this.order_id}`).set({
      products: products,
      price: totalPrice,
      restaurant_id: restaurant_id
    });
  }
}
