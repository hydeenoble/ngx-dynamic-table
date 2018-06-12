import { Component, OnInit, Output , Input } from '@angular/core';
import { NgDynamicTableConfig } from './../lib/interfaces/ng-dynamic-table-config';

@Component({
  selector: 'lib-ng-dynamic-table',
  templateUrl: './ng-dynamic-table.component.html',
  styles: []
})
export class NgDynamicTableComponent implements OnInit {

  @Input()
  config: NgDynamicTableConfig;
  constructor() { }

  ngOnInit() {
  }

}
