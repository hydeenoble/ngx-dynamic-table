import { TestBed, inject } from '@angular/core/testing';

import { NgxDynamicTableService } from './ngx-dynamic-table.service';

describe('NgxDynamicTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDynamicTableService]
    });
  });

  it('should be created', inject([NgxDynamicTableService], (service: NgxDynamicTableService) => {
    expect(service).toBeTruthy();
  }));
});
