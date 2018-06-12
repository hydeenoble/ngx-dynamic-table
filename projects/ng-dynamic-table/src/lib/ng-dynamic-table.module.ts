import { NgModule } from '@angular/core';
import { NgDynamicTableComponent } from './ng-dynamic-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgDynamicTableComponent],
  exports: [NgDynamicTableComponent]
})
export class NgDynamicTableModule { }
