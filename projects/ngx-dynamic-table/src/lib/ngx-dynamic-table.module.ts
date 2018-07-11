import { NgModule } from '@angular/core';
import { NgxDynamicTableComponent } from './ngx-dynamic-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxDynamicTableComponent],
  exports: [NgxDynamicTableComponent]
})
export class NgxDynamicTableModule { }
