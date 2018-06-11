import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynamicTableComponent } from './ng-dynamic-table.component';

describe('NgDynamicTableComponent', () => {
  let component: NgDynamicTableComponent;
  let fixture: ComponentFixture<NgDynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
