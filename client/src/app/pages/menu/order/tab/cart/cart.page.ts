import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { OrderService } from '../../../../../shared/services/order.service';
import { Product } from '../../../../../shared/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  public products: Product[] = [];
  public isEmptyProducts: boolean;
  public totalPrice: number;
  public btnText: string = "Order";

  @ViewChild('list', {static: false})list: IonList;

  constructor(private orderService: OrderService) {
    this.isEmptyProducts = true;
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    this.orderService.getProducts().then(products => {
      this.products = products;

      // show empty-container, if length of products is null (when there are no items in Storage)
      if(!products || products.length == 0) {
        this.isEmptyProducts = true;
      }
      else {
        this.isEmptyProducts = false;

        this.orderService.getPrice().then(price => {
          this.totalPrice = price;
        });
      }
    });
  }

  deleteProduct(product_id: number) {
    this.orderService.deleteProduct(product_id).then(() => {
      this.list.closeSlidingItems();
      this.getProducts();
    });
  }

  orderProducts(products: Product[], totalPrice: number) {
    this.orderService.createOrderDocument(products, totalPrice);
  }
}
