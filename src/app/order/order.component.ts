import { Component } from '@angular/core';
import { DataService } from '../api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  orders: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getOrderData().subscribe(
      (data) => {
        if (data) {
          this.orders = data;
          console.log('orders' , this.orders);
        } else {
          console.error('No User data found');
        }
    },
    (error) => {
      console.error('An error occurred:', error);
    });
  }
}
