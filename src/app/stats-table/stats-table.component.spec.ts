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
    {Id: 1, Abbreviation: 'CF', CategoryName: 'Category that is Fake'},
    {Id: 2, Abbreviation: 'FC', CategoryName: 'Fake Category'},
    {Id: 3, Abbreviation: 'FY', CategoryName: 'Fakey Fake Category'}
  ];
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

    spyOn(statsService, 'getStatsCategories').and.returnValue(of(fakeCategories));
    spyOn(statsService, 'getStatistics').and.returnValue(of(fakeStatistics));
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
      expect(statsService.getStatistics).toHaveBeenCalled();
    });
  });

  describe('objectValues', () => {
    it('should be a reference to Object.values', () => {
      expect(component.objectValues).toEqual(Object.values);
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

  describe('getStatistics', () => {
    it('should use the stats service to get the statistics', () => {
      component.getStatistics();

      expect(statsService.getStatistics).toHaveBeenCalled();
    });

    it('should set the statistics of the component', () => {
      component.getStatistics();

      expect(component.statsForEachPlayer).toEqual(fakeStatistics);
    });
  });
});
