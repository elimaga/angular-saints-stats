import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {of} from 'rxjs';

import { StatsTableComponent } from './stats-table.component';
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

  const fakePlayers = [
    {id: 1, name: 'Fake Player'},
    {id: 2, name: 'Player that is Fake'},
    {id: 3, name: 'Fakey Fake Player'}
  ];

  const fakeStatistics = [
    {playerId: 1, categoryId: 1, value: 4},
    {playerId: 1, categoryId: 3, value: 7},
    {playerId: 2, categoryId: 1, value: 5},
    {playerId: 2, categoryId: 3, value: 9}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTableComponent ],
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

    spyOn(statsService, 'getStatsCategories').and.returnValue(of(fakeCategories));
    spyOn(statsService, 'getPlayers').and.returnValue(of(fakePlayers));
    spyOn(statsService, 'getStatisticsByPlayer'); // .and.returnValue(of(fakeStatistics));
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

    it('should use the stats service to get the statistics for each player', () => {
      component.getPlayersAndTheirStatistics();

      expect(statsService.getStatisticsByPlayer).toHaveBeenCalledTimes(fakePlayers.length);
    });
  });
});
