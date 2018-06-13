import { Component } from '@angular/core';
// import { NgDynamicTableComponent } from 'ng-dynamic-table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = {
    tableName: 'Customer Table',
    tableHeaders: ['name', 'phone', 'country', 'zip code', 'state', 'customer', 'order number'],
    tableData: [
      {
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      }
    ]
  };
}
