import { TestBed, inject } from '@angular/core/testing';

import { EmpListService } from './emp-list.service';

describe('EmpListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpListService]
    });
  });

  it('should be created', inject([EmpListService], (service: EmpListService) => {
    expect(service).toBeTruthy();
  }));
});
