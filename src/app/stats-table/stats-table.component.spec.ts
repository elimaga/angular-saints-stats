import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {StatsTableComponent} from './stats-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StatsService} from '../stats.service';

describe('StatsTableComponent', () => {
  let component: StatsTableComponent;
  let fixture: ComponentFixture<StatsTableComponent>;
  let statsService: StatsService;

  const fakeCategories = [
    {id: 1, abbreviation: 'FC', name: 'Fake Category'},
    {id: 2, abbreviation: 'CF', name: 'Category that is Fake'},
    {id: 3, abbreviation: 'FY', name: 'Fakey Fake Category'}
  ];

  let fakePlayers;
  let fakeStatistics;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsTableComponent],
      providers: [
        StatsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    statsService = TestBed.get(StatsService);

    fakePlayers = [
      {id: 3, name: 'Fake Player'},
      {id: 1, name: 'Player that is Fake'},
      {id: 2, name: 'Fakey Fake Player'}
    ];
    fakeStatistics = [];

    spyOn(statsService, 'getStatsCategories').and.returnValue(of(fakeCategories));
    spyOn(statsService, 'getPlayers').and.returnValue(of(fakePlayers));
    spyOn(statsService, 'getStatisticsByPlayer').and.returnValue(of(fakeStatistics));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the stats table', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('table')).toBeTruthy();
    expect(compiled.querySelector('thead')).toBeTruthy();
    expect(compiled.querySelector('tbody')).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get the stats categories and players on initialization', () => {
      component.ngOnInit();

      expect(statsService.getStatsCategories).toHaveBeenCalled();
    });
  });

  describe('getStatsCategories', () => {
    it('should use the stats service to get the categories', () => {
      component.getStatsCategories();

      expect(statsService.getStatsCategories).toHaveBeenCalled();
    });

    it('should set the stats categories of the component', () => {
      component.getStatsCategories();

      expect(component.statsCategories).toEqual(fakeCategories);
    });
  });

  describe('getPlayersAndTheirStatistics', () => {
    it('should use the stats service to get the players', () => {
      component.getPlayersAndTheirStatistics();

      expect(statsService.getPlayers).toHaveBeenCalled();
    });

    it('should add the players and their numbers to the statistics array', () => {
      const expectedStatisticsArray = [
        {'#': 1, player: 'Player that is Fake'},
        {'#': 2, player: 'Fakey Fake Player'},
        {'#': 3, player: 'Fake Player'}
      ];

      component.getPlayersAndTheirStatistics();

      expect(JSON.stringify(component.statistics)).toEqual(JSON.stringify(expectedStatisticsArray));
    });

    it('should use the stats service to get the statistics for each player', () => {
      component.getPlayersAndTheirStatistics();

      expect(statsService.getStatisticsByPlayer).toHaveBeenCalledTimes(fakePlayers.length);
    });

    it('should calculate all the statistics and add them to statistics array', () => {
      fakePlayers = [{id: 6, name: 'Eli'}];
      fakeStatistics = [
        {playerId: 6, categoryId: 1, value: 9},
        {playerId: 6, categoryId: 3, value: 14},
        {playerId: 6, categoryId: 4, value: 12},
        {playerId: 6, categoryId: 5, value: 1},
        {playerId: 6, categoryId: 6, value: 0},
        {playerId: 6, categoryId: 7, value: 0},
        {playerId: 6, categoryId: 8, value: 5},
        {playerId: 6, categoryId: 9, value: 10},
        {playerId: 6, categoryId: 10, value: 2},
        {playerId: 6, categoryId: 11, value: 8},
        {playerId: 6, categoryId: 12, value: 0},
        {playerId: 6, categoryId: 17, value: 0},
        {playerId: 6, categoryId: 18, value: 0},
        {playerId: 6, categoryId: 19, value: 0},
        {playerId: 6, categoryId: 20, value: 1},
        {playerId: 6, categoryId: 23, value: 0},
        {playerId: 6, categoryId: 24, value: 7},
        {playerId: 6, categoryId: 25, value: 6},
        {playerId: 6, categoryId: 27, value: 41}
      ];
      const expectedStatisticsArray = [
        {
          '#': 6,
          player: 'Eli',
          G: 9,
          AB: 30,
          R: 14,
          H: 12,
          '2B': 1,
          '3B': 0,
          HR: 0,
          RBI: 5,
          BB: 10,
          SO: 2,
          SB: 8,
          CS: 0,
          AVG: 0.400,
          OBP: 0.537,
          SLG: 0.433,
          OPS: 0.970,
          IBB: 0,
          HBP: 0,
          SAC: 0,
          SF: 1,
          TB: 13,
          XBH: 1,
          GDP: 0,
          GO: 7,
          AO: 6,
          GO_AO: 1.17,
          PA: 41
        }
      ];

      component.getPlayersAndTheirStatistics();

      expect(JSON.stringify(component.statistics)).toEqual(JSON.stringify(expectedStatisticsArray));
    });
  });
});
