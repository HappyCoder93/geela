import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/Product';
 
const ORDER_KEY = 'order';
const TOTAL_PRICE = 'total';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  public totalPrice: number = 0;
 
  constructor(private storage: Storage) { }

  // CRUD operations (without UPDATE) of Storage with key ORDER_KEY
  addProduct(product: Product) {
    this.storage.get(ORDER_KEY).then((products: Product[]) => {
      if(products) {

        // calculate total summary and store it in value summary
        this.totalPrice += product.price;
        this.addPrice(this.totalPrice);
      
        products.push(product);
        return this.storage.set(ORDER_KEY, products);
      }
      else {
        return this.storage.set(ORDER_KEY, [product]);
      }
    });
  }

  getProducts() {
    return this.storage.get(ORDER_KEY);
  }

  async deleteProduct(product_id: number) {
    await this.storage.get(ORDER_KEY).then((products: Product[]) => {
      if(!products || products.length === 0) {
        return null;
      }
      
      let toKeep: Product[] = [];

      for(let i of products) {
        if(i.product_id !== product_id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ORDER_KEY, toKeep);
    });
  }

  // add total price of all product prices within to Storage with key TOTAL_PRICE
  addPrice(price: number) {
    this.storage.get(TOTAL_PRICE).then((totalPrice: number) => {
      totalPrice = price;
      return this.storage.set(TOTAL_PRICE, totalPrice);
    });  
  }

  getPrice() {
    return this.storage.get(TOTAL_PRICE);
  }
}
