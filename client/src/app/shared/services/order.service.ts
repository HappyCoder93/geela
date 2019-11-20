import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Product } from '../models/Product';
 
const ORDER_KEY = 'order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  public summary: number;
 
  constructor(private storage: Storage) { }

  // basic CRUD operations (without UPDATE) of Storage
  addProduct(product: Product) {
    this.storage.get(ORDER_KEY).then((products: Product[]) => {
      if(products) {
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
}
