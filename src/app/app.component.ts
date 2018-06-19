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
    tableOffset: 5,
    tableHeaders: ['id', 'name', 'phone', 'country', 'zip code', 'state', 'customer', 'order number'],
    tableData: [
      {
        id: 1,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 2,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 3,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 4,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 5,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 6,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 7,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 8,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 9,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 10,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 11,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 12,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 13,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 14,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 15,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 16,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 17,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 18,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 19,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 20,
        name: 'Adeyinka Micheal',
        phone: '+2348161691968',
        country: 'Jamiaca',
        'zip code': 112221,
        state: 'Kwaba',
        customer: 122332,
        'order number': 'fbjksfhskjfshkfjsfh'
      },
      {
        id: 21,
        name: 'Idowu Emehinola',
        phone: '+2348161691968',
        country: 'Nigeria',
        'zip code': 100222,
        state: 'Lagos',
        customer: 12233,
        'order number': 1234442223343
      },
      {
        id: 22,
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
