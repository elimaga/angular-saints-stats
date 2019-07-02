import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });

  describe('createDb', () => {
    it('should create the the table with the correct values', () => {
      const service: InMemoryDataService = TestBed.get(InMemoryDataService);

      const database = service.createDb();

      expect(JSON.stringify(database)).toEqual(JSON.stringify([]));
    });
  });
});
