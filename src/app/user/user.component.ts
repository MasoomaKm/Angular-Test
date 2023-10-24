import { Component, OnInit  } from '@angular/core';
import { DataService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getUserData().subscribe(
      (data) => {
        if (data) {
          this.users = data;

          console.log('users' , this.users);
        } else {
          console.error('No User data found');
        }
    },
    (error) => {
      console.error('An error occurred:', error);
    });
  }
}