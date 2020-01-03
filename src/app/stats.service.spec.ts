import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {StatsService} from './stats.service';

describe('StatsService', () => {
  let injector: TestBed;
  let service: StatsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsService],
      imports: [
        HttpClientTestingModule
      ]
    });

    injector = getTestBed();
    service = injector.get(StatsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Stats Categories', () => {
    it('should make an http request to get the stats categories', (done) => {
      const fakeCategories = [
        {Id: 1, Abbreviation: 'FC', CategoryName: 'Fake Category'},
        {Id: 2, Abbreviation: 'CF', CategoryName: 'Category that is Fake'}
      ];

      service.getStatsCategories()
        .then(statsCategories => {
          expect(statsCategories).toEqual(fakeCategories);
          done();
        })
        .catch(err => {
          fail('This test should not throw an error: ' + err)
        });

      const req = httpMock.expectOne('https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statscategories');
      expect(req.request.method).toBe('GET');
      req.flush(fakeCategories);
    });
  });

  describe('Statistics', () => {
    it('should make an http request to get all of the statistics for all players', (done) => {
      const fakeStatistics = [
        {
          Number: 3,
          Name: 'Zeke',
          CF: 6,
          FC: 12,
          FY: 8
        },
        {
          Number: 6,
          Name: 'Eli',
          CF: 3,
          FC: 9,
          FY: 0
        },
        {
          Number: 12,
          Name: 'Santos',
          CF: 7,
          FC: 11,
          FY: 5
        }
      ];

      service.getStatistics()
        .then(statistics => {
          expect(statistics).toEqual(fakeStatistics);
          done();
        })
        .catch(err => {
          fail('This test should not throw an error: ' + err)
        });

      const req = httpMock.expectOne(`https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statistics`);
      expect(req.request.method).toBe('GET');
      req.flush(fakeStatistics);
    });
  });
});
