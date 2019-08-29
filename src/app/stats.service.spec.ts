import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import sinon from 'sinon';

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
    let dataCallback;
    let errorCallback;
    let testObserver;

    beforeEach(() => {
      dataCallback = sinon.spy();
      errorCallback = sinon.spy();
      testObserver = {
        next: dataCallback,
        error: errorCallback
      };
    });

    it('should make an http request to get the stats categories', () => {
      const fakeCategories = [
        {Id: 1, Abbreviation: 'FC', CategoryName: 'Fake Category'},
        {Id: 2, Abbreviation: 'CF', CategoryName: 'Category that is Fake'}
      ];

      service.getStatsCategories().subscribe(testObserver);

      const req = httpMock.expectOne('https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statscategories');
      expect(req.request.method).toBe('GET');
      req.flush(fakeCategories);

      const statsCategories = dataCallback.args[0][0];
      expect(statsCategories.length).toBe(fakeCategories.length);
      expect(statsCategories).toEqual(fakeCategories);

      expect(errorCallback.callCount).toEqual(0);
    });
  });

  describe('Statistics', () => {
    let dataCallback;
    let errorCallback;
    let testObserver;

    beforeEach(() => {
      dataCallback = sinon.spy();
      errorCallback = sinon.spy();
      testObserver = {
        next: dataCallback,
        error: errorCallback
      };
    });

    it('should make an http request to get all of the statistics for all players', () => {
      service.getStatistics().subscribe(testObserver);

      const req = httpMock.expectOne(`https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statistics`);
      expect(req.request.method).toBe('GET');
    });
  });
});
