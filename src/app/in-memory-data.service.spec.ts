import { TestBed, getTestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let injector: TestBed;
  let service: InMemoryDataService;

  const emptyStatsCategories = [];
  const statsCategories = [
    { id: 1, abbreviation: 'G', name: 'Games' },
    { id: 2, abbreviation: 'AB', name: 'At Bats' },
    { id: 3, abbreviation: 'R', name: 'Runs' },
    { id: 4, abbreviation: 'H', name: 'Hits' },
    { id: 5, abbreviation: '2B', name: 'Doubles' },
    { id: 6, abbreviation: '3B', name: 'Triples' },
    { id: 7, abbreviation: 'HR', name: 'Homeruns' },
    { id: 8, abbreviation: 'RBI', name: 'Runs Batted In' },
    { id: 9, abbreviation: 'BB', name: 'Base on Balls' },
    { id: 10, abbreviation: 'SO', name: 'Strikeouts' },
    { id: 11, abbreviation: 'SB', name: 'Stolen Bases' },
    { id: 12, abbreviation: 'CS', name: 'Caught Stealing' },
    { id: 13, abbreviation: 'AVG', name: 'Average' },
    { id: 14, abbreviation: 'OBP', name: 'On-Base Percentage' },
    { id: 15, abbreviation: 'SLG', name: 'Slugging Percentage' },
    { id: 16, abbreviation: 'OPS', name: 'On-Base Plus Slugging' },
    { id: 17, abbreviation: 'IBB', name: 'Intentional Walks' },
    { id: 18, abbreviation: 'HBP', name: 'Hit By Pitch' },
    { id: 19, abbreviation: 'SAC', name: 'Sacrifice Bunts' },
    { id: 20, abbreviation: 'SF', name: 'Sacrifice Flys' },
    { id: 21, abbreviation: 'TB', name: 'Total Bases' },
    { id: 22, abbreviation: 'XBH', name: 'Extra Base Hits' },
    { id: 23, abbreviation: 'GDP', name: 'Grounded Into Double Plays' },
    { id: 24, abbreviation: 'GO', name: 'Ground Outs' },
    { id: 25, abbreviation: 'AO', name: 'Fly Outs' },
    { id: 26, abbreviation: 'GO_AO', name: 'Ground Outs Per Fly Out' },
    { id: 27, abbreviation: 'PA', name: 'Plate Appearances' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService],
    });

    injector = getTestBed();
    service = injector.get(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createDb', () => {
    it('should create the the table with the correct values', () => {
      const expectedDatabase = {
        statsCategories
      };

      const actualDatabase = service.createDb();

      expect(JSON.stringify(actualDatabase)).toEqual(JSON.stringify(expectedDatabase));
    });
  });

  describe('genId', () => {
    it('should generate the first id when the database is empty', () => {
      const generatedId = service.genId(emptyStatsCategories);

      expect(generatedId).toEqual(1);
    });

    it('should generate the next highest id when the database is not empty', () => {
      const generatedId = service.genId(statsCategories);

      expect(generatedId).toEqual(28);
    });
  });
});
