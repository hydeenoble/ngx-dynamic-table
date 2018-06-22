import { TestBed, inject } from '@angular/core/testing';

import { NgDynamicTableService } from './ngx-dynamic-table.service';

describe('NgDynamicTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgDynamicTableService]
    });
  });

  it('should be created', inject([NgDynamicTableService], (service: NgDynamicTableService) => {
    expect(service).toBeTruthy();
  }));
});
