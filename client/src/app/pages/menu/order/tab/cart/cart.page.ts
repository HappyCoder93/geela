import { Component, OnInit, ViewChild } from '@angular/core';
import { TabPage } from '../tab.page';
import { IonList } from '@ionic/angular';
import { OrderService } from '../../../../../shared/services/order.service';
import { Product } from '../../../../../shared/models/Product';
import { Router } from '@angular/router';

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

  constructor(private tabPage: TabPage, private orderService: OrderService, private router: Router) {
    this.isEmptyProducts = true;
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    this.orderService.getProducts().then(products => {
      this.products = products;

      // show empty-container, if length of products is null (no items in Storage)
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

  // create order and send order to Firestore
  orderProducts(products: Product[], totalPrice: number) {
    this.orderService.createOrderDocument(this.tabPage.param, products, totalPrice);
    this.router.navigateByUrl('/menu/home');
  }
}
