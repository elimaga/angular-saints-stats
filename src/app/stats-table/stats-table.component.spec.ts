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
    {id: 3, abbreviation: 'FY', name: 'Fakey Fake'}
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
    it('should get the stats categories on initialization', () => {
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
});
