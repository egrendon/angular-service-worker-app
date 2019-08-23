import { TestBed } from '@angular/core/testing';

import { MicroSoftGraphService } from './micro-soft-graph.service';

describe('MicroSoftGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroSoftGraphService = TestBed.get(MicroSoftGraphService);
    expect(service).toBeTruthy();
  });
});
