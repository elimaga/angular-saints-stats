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
        {id: 1, abbreviation: 'FC', name: 'Fake Category'},
        {id: 2, abbreviation: 'CF', name: 'Category that is Fake'}
      ];

      service.getStatsCategories().subscribe(testObserver);

      const req = httpMock.expectOne('api/statsCategories');
      expect(req.request.method).toBe('GET');
      req.flush(fakeCategories);

      const statsCategories = dataCallback.args[0][0];
      expect(statsCategories.length).toBe(fakeCategories.length);
      expect(statsCategories).toEqual(fakeCategories);

      expect(errorCallback.callCount).toEqual(0);
    });
  });

  describe('Players', () => {
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

    it('should make an http request to get the players', () => {
      const fakePlayers = [
        {id: 1, name: 'Fake Player'},
        {id: 2, name: 'Player that is Fake'}
      ];

      service.getPlayers().subscribe(testObserver);

      const req = httpMock.expectOne('api/players');
      expect(req.request.method).toBe('GET');
      req.flush(fakePlayers);

      const players = dataCallback.args[0][0];
      expect(players.length).toBe(fakePlayers.length);
      expect(players).toEqual(fakePlayers);

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

    it('should make an http request to get the statistics by the playerId', () => {
      const playerId = 2;

      service.getStatisticsByPlayer(playerId).subscribe(testObserver);

      const req = httpMock.expectOne(`api/statistics?playerId=^${playerId}$`);
      expect(req.request.method).toBe('GET');
    });
  });
});
