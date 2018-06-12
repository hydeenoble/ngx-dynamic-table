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
    tableName: 'Dynamic Table'
  };
}
