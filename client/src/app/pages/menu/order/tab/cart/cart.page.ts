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
  public summary: number;

  @ViewChild('list', {static: false})list: IonList;

  constructor(private orderService: OrderService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getProducts();
  }

  getProducts() {
    this.orderService.getProducts().then(products => {
      this.products = products;
    });
  }

  deleteProduct(product_id: number) {
    this.orderService.deleteProduct(product_id).then(() => {
      this.list.closeSlidingItems();
      this.getProducts();
    });
  }
}
