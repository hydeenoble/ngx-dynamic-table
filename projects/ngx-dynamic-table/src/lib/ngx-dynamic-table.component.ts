import { Component, OnInit, Output , Input } from '@angular/core';
import { NgDynamicTableConfig } from '../lib/interfaces/ngx-dynamic-table-config';
import { toUnicode } from 'punycode';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ngx-dynamic-table',
  templateUrl: './ngx-dynamic-table.component.html',
  styleUrls: ['./ngx-dynamic-table.component.scss']
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
  tableData: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.disablePrev = true;
    this.disableNext = false;
    this.from = 1;
    this.to = this.offset = this.config.tableOffset;
    this.total = this.config.tableData.length;
    // console.log();
    this.tableData = this.paginatedData();
  }
  next() {
    this.from += this.offset;
    this.to += this.offset;

    this.disableStatus();
    this.tableData = this.paginatedData();
  }

  prev() {
    this.from -= this.offset;
    this.to -= this.offset;
    this.disableStatus();
    this.tableData = this.paginatedData();
  }

  disableStatus() {
    if ((this.from - 1) <= 1) {
      this.disablePrev = true;
    } else {
      this.disablePrev = false;
    }

    if ((this.to + 1) >= this.total) {
      this.disableNext = true;
    } else {
      this.disableNext = false;
    }
  }

  paginatedData() {
    console.log(this.from, this.to);
    const data = this.config.tableData;
    return data.slice(this.from - 1, this.to);
  }
}
