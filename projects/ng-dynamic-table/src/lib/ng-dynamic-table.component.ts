import { Component, OnInit, Output , Input } from '@angular/core';
import { NgDynamicTableConfig } from './../lib/interfaces/ng-dynamic-table-config';
import { toUnicode } from 'punycode';

@Component({
  selector: 'lib-ng-dynamic-table',
  templateUrl: './ng-dynamic-table.component.html',
  styleUrls: ['./ng-dynamic-table.component.scss']
})
export class NgDynamicTableComponent implements OnInit {

  @Input()
  config: NgDynamicTableConfig;
  from: number ;
  to: number;
  total: number;
  offset: number;
  disablePrev: boolean;
  disableNext: boolean;

  constructor() {
  }

  ngOnInit() {
    this.disablePrev = true;
    this.disableNext = false;
    this.from = 1;
    this.to = this.offset = this.config.tableOffset;
    this.total = this.config.tableData.length;
  }
  next() {
    this.from += this.offset;
    this.to += this.offset;

    if ((this.to + this.offset) >= this.total) {
      console.log('from', this.to);
      this.disableNext = true;
    } else {
      this.disableNext = false;
    }
  }

  prev() {
    this.from -= this.offset;
    this.to -= this.offset;

    if ((this.from - 1) <= 1) {
      console.log('from', this.from);
      this.disablePrev = true;
    } else {
      this.disablePrev = false;
    }
  }

  checkNext() {
    return this.to >= this.total;
  }

  checkPrev() {
    return this.from >= 1;
  }
}
