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

  describe('getStatsCategories', () => {
    let dataCallback;
    let errorCallback;
    let observer;

    beforeEach(() => {
      dataCallback = sinon.spy();
      errorCallback = sinon.spy();
      observer = {
        next: dataCallback,
        error: errorCallback
      };
    });

    it('should make an http request to get the stats categories', () => {
      const fakeCategories = [
        {id: 1, abbreviation: 'FC', name: 'Fake Category'},
        {id: 2, abbreviation: 'CF', name: 'Category that is Fake'}
      ];

      service.getStatsCategories().subscribe(observer);

      const req = httpMock.expectOne('api/statsCategories');
      expect(req.request.method).toBe('GET');
      req.flush(fakeCategories);

      const statsCategories = dataCallback.args[0][0];
      expect(statsCategories.length).toBe(2);
      expect(statsCategories).toEqual(fakeCategories);

      expect(errorCallback.callCount).toEqual(0);
    });
  });
});
