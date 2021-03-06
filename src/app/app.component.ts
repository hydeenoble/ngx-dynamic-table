import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = {
    tableName: 'Customer Table',
    tableOffset: 5,
    tableHeaders: ['name', 'phone', 'country', 'zip code', 'state', 'customer', 'order number'],
    tableData: [
      {
        name: 'John Doe 1',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
    ]
  };
}
