import { TestBed } from '@angular/core/testing';

import { AzureDemoService } from './azure-demo.service';

describe('AzureDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzureDemoService = TestBed.get(AzureDemoService);
    expect(service).toBeTruthy();
  });
});
