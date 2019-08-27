import { TestBed, getTestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let injector: TestBed;
  let service: InMemoryDataService;

  const emptyStatsCategories = [];
  const statsCategories = [
    { Id: 1, Abbreviation: 'G', CategoryName: 'Games' },
    { Id: 2, Abbreviation: 'AB', CategoryName: 'At Bats' },
    { Id: 3, Abbreviation: 'R', CategoryName: 'Runs' },
    { Id: 4, Abbreviation: 'H', CategoryName: 'Hits' },
    { Id: 5, Abbreviation: '2B', CategoryName: 'Doubles' },
    { Id: 6, Abbreviation: '3B', CategoryName: 'Triples' },
    { Id: 7, Abbreviation: 'HR', CategoryName: 'Homeruns' },
    { Id: 8, Abbreviation: 'RBI', CategoryName: 'Runs Batted In' },
    { Id: 9, Abbreviation: 'BB', CategoryName: 'Base on Balls' },
    { Id: 10, Abbreviation: 'SO', CategoryName: 'Strikeouts' },
    { Id: 11, Abbreviation: 'SB', CategoryName: 'Stolen Bases' },
    { Id: 12, Abbreviation: 'CS', CategoryName: 'Caught Stealing' },
    { Id: 13, Abbreviation: 'AVG', CategoryName: 'Average' },
    { Id: 14, Abbreviation: 'OBP', CategoryName: 'On-Base Percentage' },
    { Id: 15, Abbreviation: 'SLG', CategoryName: 'Slugging Percentage' },
    { Id: 16, Abbreviation: 'OPS', CategoryName: 'On-Base Plus Slugging' },
    { Id: 17, Abbreviation: 'IBB', CategoryName: 'Intentional Walks' },
    { Id: 18, Abbreviation: 'HBP', CategoryName: 'Hit By Pitch' },
    { Id: 19, Abbreviation: 'SAC', CategoryName: 'Sacrifice Bunts' },
    { Id: 20, Abbreviation: 'SF', CategoryName: 'Sacrifice Flys' },
    { Id: 21, Abbreviation: 'TB', CategoryName: 'Total Bases' },
    { Id: 22, Abbreviation: 'XBH', CategoryName: 'Extra Base Hits' },
    { Id: 23, Abbreviation: 'GDP', CategoryName: 'Grounded Into Double Plays' },
    { Id: 24, Abbreviation: 'GO', CategoryName: 'Ground Outs' },
    { Id: 25, Abbreviation: 'AO', CategoryName: 'Fly Outs' },
    { Id: 26, Abbreviation: 'GO_AO', CategoryName: 'Ground Outs Per Fly Out' },
    { Id: 27, Abbreviation: 'PA', CategoryName: 'Plate Appearances' }
  ];
  const players = [
    { id: 3, name: 'Zeke' },
    { id: 4, name: 'Michael' },
    { id: 5, name: 'Dominic' },
    { id: 6, name: 'Eli' },
    { id: 8, name: 'Tony' },
    { id: 9, name: 'Art' },
    { id: 10, name: 'Taylor' },
    { id: 12, name: 'Santos' },
    { id: 16, name: 'Ryan' },
    { id: 18, name: 'Jesse' },
    { id: 19, name: 'Kolby' },
    { id: 20, name: 'Lupe' },
    { id: 23, name: 'Santana' },
    { id: 23, name: 'Sal' },
    { id: 48, name: 'Andrew' }
  ];
  const statistics = [
    { playerId: 3, categoryId: 1, value: 7 },
    { playerId: 3, categoryId: 3, value: 4 },
    { playerId: 3, categoryId: 4, value: 4 },
    { playerId: 3, categoryId: 5, value: 0 },
    { playerId: 3, categoryId: 6, value: 0 },
    { playerId: 3, categoryId: 7, value: 0 },
    { playerId: 3, categoryId: 8, value: 2 },
    { playerId: 3, categoryId: 9, value: 5 },
    { playerId: 3, categoryId: 10, value: 10 },
    { playerId: 3, categoryId: 11, value: 2 },
    { playerId: 3, categoryId: 12, value: 0 },
    { playerId: 3, categoryId: 17, value: 0 },
    { playerId: 3, categoryId: 18, value: 0 },
    { playerId: 3, categoryId: 19, value: 0 },
    { playerId: 3, categoryId: 20, value: 0 },
    { playerId: 3, categoryId: 23, value: 0 },
    { playerId: 3, categoryId: 24, value: 1 },
    { playerId: 3, categoryId: 25, value: 7 },
    { playerId: 3, categoryId: 27, value: 30 },
    { playerId: 4, categoryId: 1, value: 4 },
    { playerId: 4, categoryId: 3, value: 3 },
    { playerId: 4, categoryId: 4, value: 4 },
    { playerId: 4, categoryId: 5, value: 0 },
    { playerId: 4, categoryId: 6, value: 0 },
    { playerId: 4, categoryId: 7, value: 1 },
    { playerId: 4, categoryId: 8, value: 3 },
    { playerId: 4, categoryId: 9, value: 1 },
    { playerId: 4, categoryId: 10, value: 4 },
    { playerId: 4, categoryId: 11, value: 0 },
    { playerId: 4, categoryId: 12, value: 0 },
    { playerId: 4, categoryId: 17, value: 0 },
    { playerId: 4, categoryId: 18, value: 0 },
    { playerId: 4, categoryId: 19, value: 0 },
    { playerId: 4, categoryId: 20, value: 0 },
    { playerId: 4, categoryId: 23, value: 0 },
    { playerId: 4, categoryId: 24, value: 5 },
    { playerId: 4, categoryId: 25, value: 2 },
    { playerId: 4, categoryId: 27, value: 17 },
    { playerId: 5, categoryId: 1, value: 3 },
    { playerId: 5, categoryId: 3, value: 0 },
    { playerId: 5, categoryId: 4, value: 0 },
    { playerId: 5, categoryId: 5, value: 0 },
    { playerId: 5, categoryId: 6, value: 0 },
    { playerId: 5, categoryId: 7, value: 0 },
    { playerId: 5, categoryId: 8, value: 0 },
    { playerId: 5, categoryId: 9, value: 0 },
    { playerId: 5, categoryId: 10, value: 3 },
    { playerId: 5, categoryId: 11, value: 0 },
    { playerId: 5, categoryId: 12, value: 0 },
    { playerId: 5, categoryId: 17, value: 0 },
    { playerId: 5, categoryId: 18, value: 0 },
    { playerId: 5, categoryId: 19, value: 0 },
    { playerId: 5, categoryId: 20, value: 0 },
    { playerId: 5, categoryId: 23, value: 0 },
    { playerId: 5, categoryId: 24, value: 5 },
    { playerId: 5, categoryId: 25, value: 2 },
    { playerId: 5, categoryId: 27, value: 17 },
    { playerId: 6, categoryId: 1, value: 8 },
    { playerId: 6, categoryId: 3, value: 10 },
    { playerId: 6, categoryId: 4, value: 9 },
    { playerId: 6, categoryId: 5, value: 0 },
    { playerId: 6, categoryId: 6, value: 0 },
    { playerId: 6, categoryId: 7, value: 0 },
    { playerId: 6, categoryId: 8, value: 3 },
    { playerId: 6, categoryId: 9, value: 10 },
    { playerId: 6, categoryId: 10, value: 2 },
    { playerId: 6, categoryId: 11, value: 7 },
    { playerId: 6, categoryId: 12, value: 0 },
    { playerId: 6, categoryId: 17, value: 0 },
    { playerId: 6, categoryId: 18, value: 0 },
    { playerId: 6, categoryId: 19, value: 0 },
    { playerId: 6, categoryId: 20, value: 1 },
    { playerId: 6, categoryId: 23, value: 0 },
    { playerId: 6, categoryId: 24, value: 6 },
    { playerId: 6, categoryId: 25, value: 6 },
    { playerId: 6, categoryId: 27, value: 36 },
    { playerId: 8, categoryId: 1, value: 7 },
    { playerId: 8, categoryId: 3, value: 7 },
    { playerId: 8, categoryId: 4, value: 7 },
    { playerId: 8, categoryId: 5, value: 2 },
    { playerId: 8, categoryId: 6, value: 0 },
    { playerId: 8, categoryId: 7, value: 0 },
    { playerId: 8, categoryId: 8, value: 2 },
    { playerId: 8, categoryId: 9, value: 9 },
    { playerId: 8, categoryId: 10, value: 5 },
    { playerId: 8, categoryId: 11, value: 3 },
    { playerId: 8, categoryId: 12, value: 1 },
    { playerId: 8, categoryId: 17, value: 0 },
    { playerId: 8, categoryId: 18, value: 1 },
    { playerId: 8, categoryId: 19, value: 1 },
    { playerId: 8, categoryId: 20, value: 0 },
    { playerId: 8, categoryId: 23, value: 0 },
    { playerId: 8, categoryId: 24, value: 1 },
    { playerId: 8, categoryId: 25, value: 6 },
    { playerId: 8, categoryId: 27, value: 33 },
    { playerId: 9, categoryId: 1, value: 5 },
    { playerId: 9, categoryId: 3, value: 2 },
    { playerId: 9, categoryId: 4, value: 2 },
    { playerId: 9, categoryId: 5, value: 0 },
    { playerId: 9, categoryId: 6, value: 0 },
    { playerId: 9, categoryId: 7, value: 0 },
    { playerId: 9, categoryId: 8, value: 1 },
    { playerId: 9, categoryId: 9, value: 0 },
    { playerId: 9, categoryId: 10, value: 4 },
    { playerId: 9, categoryId: 11, value: 1 },
    { playerId: 9, categoryId: 12, value: 0 },
    { playerId: 9, categoryId: 17, value: 0 },
    { playerId: 9, categoryId: 18, value: 0 },
    { playerId: 9, categoryId: 19, value: 0 },
    { playerId: 9, categoryId: 20, value: 0 },
    { playerId: 9, categoryId: 23, value: 0 },
    { playerId: 9, categoryId: 24, value: 2 },
    { playerId: 9, categoryId: 25, value: 0 },
    { playerId: 9, categoryId: 27, value: 8 },
    { playerId: 10, categoryId: 1, value: 7 },
    { playerId: 10, categoryId: 3, value: 6 },
    { playerId: 10, categoryId: 4, value: 8 },
    { playerId: 10, categoryId: 5, value: 3 },
    { playerId: 10, categoryId: 6, value: 0 },
    { playerId: 10, categoryId: 7, value: 0 },
    { playerId: 10, categoryId: 8, value: 6 },
    { playerId: 10, categoryId: 9, value: 2 },
    { playerId: 10, categoryId: 10, value: 3 },
    { playerId: 10, categoryId: 11, value: 7 },
    { playerId: 10, categoryId: 12, value: 0 },
    { playerId: 10, categoryId: 17, value: 0 },
    { playerId: 10, categoryId: 18, value: 1 },
    { playerId: 10, categoryId: 19, value: 1 },
    { playerId: 10, categoryId: 20, value: 0 },
    { playerId: 10, categoryId: 23, value: 0 },
    { playerId: 10, categoryId: 24, value: 1 },
    { playerId: 10, categoryId: 25, value: 1 },
    { playerId: 10, categoryId: 27, value: 25 },
    { playerId: 12, categoryId: 1, value: 4 },
    { playerId: 12, categoryId: 3, value: 0 },
    { playerId: 12, categoryId: 4, value: 0 },
    { playerId: 12, categoryId: 5, value: 0 },
    { playerId: 12, categoryId: 6, value: 0 },
    { playerId: 12, categoryId: 7, value: 0 },
    { playerId: 12, categoryId: 8, value: 0 },
    { playerId: 12, categoryId: 9, value: 1 },
    { playerId: 12, categoryId: 10, value: 1 },
    { playerId: 12, categoryId: 11, value: 0 },
    { playerId: 12, categoryId: 12, value: 0 },
    { playerId: 12, categoryId: 17, value: 0 },
    { playerId: 12, categoryId: 18, value: 1 },
    { playerId: 12, categoryId: 19, value: 0 },
    { playerId: 12, categoryId: 20, value: 0 },
    { playerId: 12, categoryId: 23, value: 0 },
    { playerId: 12, categoryId: 24, value: 1 },
    { playerId: 12, categoryId: 25, value: 1 },
    { playerId: 12, categoryId: 27, value: 5 },
    { playerId: 16, categoryId: 1, value: 7 },
    { playerId: 16, categoryId: 3, value: 2 },
    { playerId: 16, categoryId: 4, value: 7 },
    { playerId: 16, categoryId: 5, value: 2 },
    { playerId: 16, categoryId: 6, value: 0 },
    { playerId: 16, categoryId: 7, value: 0 },
    { playerId: 16, categoryId: 8, value: 6 },
    { playerId: 16, categoryId: 9, value: 4 },
    { playerId: 16, categoryId: 10, value: 4 },
    { playerId: 16, categoryId: 11, value: 5 },
    { playerId: 16, categoryId: 12, value: 1 },
    { playerId: 16, categoryId: 17, value: 0 },
    { playerId: 16, categoryId: 18, value: 1 },
    { playerId: 16, categoryId: 19, value: 0 },
    { playerId: 16, categoryId: 20, value: 0 },
    { playerId: 16, categoryId: 23, value: 0 },
    { playerId: 16, categoryId: 24, value: 8 },
    { playerId: 16, categoryId: 25, value: 0 },
    { playerId: 16, categoryId: 27, value: 28 },
    { playerId: 18, categoryId: 1, value: 6 },
    { playerId: 18, categoryId: 3, value: 3 },
    { playerId: 18, categoryId: 4, value: 4 },
    { playerId: 18, categoryId: 5, value: 2 },
    { playerId: 18, categoryId: 6, value: 1 },
    { playerId: 18, categoryId: 7, value: 0 },
    { playerId: 18, categoryId: 8, value: 3 },
    { playerId: 18, categoryId: 9, value: 0 },
    { playerId: 18, categoryId: 10, value: 2 },
    { playerId: 18, categoryId: 11, value: 2 },
    { playerId: 18, categoryId: 12, value: 0 },
    { playerId: 18, categoryId: 17, value: 0 },
    { playerId: 18, categoryId: 18, value: 0 },
    { playerId: 18, categoryId: 19, value: 0 },
    { playerId: 18, categoryId: 20, value: 0 },
    { playerId: 18, categoryId: 23, value: 0 },
    { playerId: 18, categoryId: 24, value: 9 },
    { playerId: 18, categoryId: 25, value: 3 },
    { playerId: 18, categoryId: 27, value: 22 },
    { playerId: 19, categoryId: 1, value: 8 },
    { playerId: 19, categoryId: 3, value: 8 },
    { playerId: 19, categoryId: 4, value: 15 },
    { playerId: 19, categoryId: 5, value: 1 },
    { playerId: 19, categoryId: 6, value: 0 },
    { playerId: 19, categoryId: 7, value: 0 },
    { playerId: 19, categoryId: 8, value: 4 },
    { playerId: 19, categoryId: 9, value: 5 },
    { playerId: 19, categoryId: 10, value: 4 },
    { playerId: 19, categoryId: 11, value: 9 },
    { playerId: 19, categoryId: 12, value: 1 },
    { playerId: 19, categoryId: 17, value: 0 },
    { playerId: 19, categoryId: 18, value: 0 },
    { playerId: 19, categoryId: 19, value: 0 },
    { playerId: 19, categoryId: 20, value: 0 },
    { playerId: 19, categoryId: 23, value: 0 },
    { playerId: 19, categoryId: 24, value: 4 },
    { playerId: 19, categoryId: 25, value: 9 },
    { playerId: 19, categoryId: 27, value: 41 },
    { playerId: 20, categoryId: 1, value: 4 },
    { playerId: 20, categoryId: 3, value: 1 },
    { playerId: 20, categoryId: 4, value: 1 },
    { playerId: 20, categoryId: 5, value: 0 },
    { playerId: 20, categoryId: 6, value: 0 },
    { playerId: 20, categoryId: 7, value: 0 },
    { playerId: 20, categoryId: 8, value: 1 },
    { playerId: 20, categoryId: 9, value: 2 },
    { playerId: 20, categoryId: 10, value: 2 },
    { playerId: 20, categoryId: 11, value: 0 },
    { playerId: 20, categoryId: 12, value: 0 },
    { playerId: 20, categoryId: 17, value: 0 },
    { playerId: 20, categoryId: 18, value: 0 },
    { playerId: 20, categoryId: 19, value: 1 },
    { playerId: 20, categoryId: 20, value: 0 },
    { playerId: 20, categoryId: 23, value: 1 },
    { playerId: 20, categoryId: 24, value: 5 },
    { playerId: 20, categoryId: 25, value: 1 },
    { playerId: 20, categoryId: 27, value: 12 },
    { playerId: 22, categoryId: 1, value: 7 },
    { playerId: 22, categoryId: 3, value: 6 },
    { playerId: 22, categoryId: 4, value: 11 },
    { playerId: 22, categoryId: 5, value: 3 },
    { playerId: 22, categoryId: 6, value: 2 },
    { playerId: 22, categoryId: 7, value: 0 },
    { playerId: 22, categoryId: 8, value: 7 },
    { playerId: 22, categoryId: 9, value: 3 },
    { playerId: 22, categoryId: 10, value: 2 },
    { playerId: 22, categoryId: 11, value: 11 },
    { playerId: 22, categoryId: 12, value: 0 },
    { playerId: 22, categoryId: 17, value: 0 },
    { playerId: 22, categoryId: 18, value: 0 },
    { playerId: 22, categoryId: 19, value: 0 },
    { playerId: 22, categoryId: 20, value: 2 },
    { playerId: 22, categoryId: 23, value: 0 },
    { playerId: 22, categoryId: 24, value: 6 },
    { playerId: 22, categoryId: 25, value: 10 },
    { playerId: 22, categoryId: 27, value: 31 },
    { playerId: 23, categoryId: 1, value: 4 },
    { playerId: 23, categoryId: 3, value: 0 },
    { playerId: 23, categoryId: 4, value: 1 },
    { playerId: 23, categoryId: 5, value: 0 },
    { playerId: 23, categoryId: 6, value: 0 },
    { playerId: 23, categoryId: 7, value: 0 },
    { playerId: 23, categoryId: 8, value: 1 },
    { playerId: 23, categoryId: 9, value: 0 },
    { playerId: 23, categoryId: 10, value: 2 },
    { playerId: 23, categoryId: 11, value: 0 },
    { playerId: 23, categoryId: 12, value: 0 },
    { playerId: 23, categoryId: 17, value: 0 },
    { playerId: 23, categoryId: 18, value: 0 },
    { playerId: 23, categoryId: 19, value: 0 },
    { playerId: 23, categoryId: 20, value: 0 },
    { playerId: 23, categoryId: 23, value: 0 },
    { playerId: 23, categoryId: 24, value: 3 },
    { playerId: 23, categoryId: 25, value: 3 },
    { playerId: 23, categoryId: 27, value: 9 },
    { playerId: 48, categoryId: 1, value: 8 },
    { playerId: 48, categoryId: 3, value: 0 },
    { playerId: 48, categoryId: 4, value: 2 },
    { playerId: 48, categoryId: 5, value: 0 },
    { playerId: 48, categoryId: 6, value: 0 },
    { playerId: 48, categoryId: 7, value: 0 },
    { playerId: 48, categoryId: 8, value: 4 },
    { playerId: 48, categoryId: 9, value: 3 },
    { playerId: 48, categoryId: 10, value: 9 },
    { playerId: 48, categoryId: 11, value: 0 },
    { playerId: 48, categoryId: 12, value: 1 },
    { playerId: 48, categoryId: 17, value: 0 },
    { playerId: 48, categoryId: 18, value: 0 },
    { playerId: 48, categoryId: 19, value: 0 },
    { playerId: 48, categoryId: 20, value: 0 },
    { playerId: 48, categoryId: 23, value: 0 },
    { playerId: 48, categoryId: 24, value: 6 },
    { playerId: 48, categoryId: 25, value: 2 },
    { playerId: 48, categoryId: 27, value: 23 }
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
        players,
        statistics
      };

      const actualDatabase = service.createDb();

      expect(JSON.stringify(actualDatabase)).toEqual(JSON.stringify(expectedDatabase));
    });
  });

  describe('genId', () => {
    it('should generate the first id when the database is empty', () => {
      const generatedId = InMemoryDataService.genId(emptyStatsCategories);

      expect(generatedId).toEqual(1);
    });

    it('should generate the next highest id when the database is not empty', () => {
      const generatedId = InMemoryDataService.genId(statsCategories);

      expect(generatedId).toEqual(28);
    });
  });
});
