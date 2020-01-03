import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {KeyTableComponent} from './key-table.component';
import {StatsService} from '../stats.service';

describe('KeyTableComponent', () => {
  let component: KeyTableComponent;
  let fixture: ComponentFixture<KeyTableComponent>;
  let statsService: StatsService;

  const fakeCategories = [
    {Id: 1, Abbreviation: 'FC', CategoryName: 'Fake Category'},
    {Id: 2, Abbreviation: 'CF', CategoryName: 'Category that is Fake'},
    {Id: 3, Abbreviation: 'FY', CategoryName: 'Fakey Fake'},
    {Id: 4, Abbreviation: 'WFO', CategoryName: 'Whoa, another fake one'},
    {Id: 5, Abbreviation: 'WTF', CategoryName: 'What the Fake'},
    {Id: 6, Abbreviation: 'HIF', CategoryName: 'Hi, how are ya, I am fake'}
  ];

  function createPromiseToResolveWith(data): any {
    return new Promise(resolve => {
      resolve(data);
    });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyTableComponent],
      providers: [
        StatsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    statsService = TestBed.get(StatsService);

    spyOn(statsService, 'getStatsCategories').and.returnValue(createPromiseToResolveWith(fakeCategories));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Key'`, () => {
    expect(component.title).toEqual('Key');
  });

  it('should render the key table', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('table')).toBeTruthy();
    expect(compiled.querySelector('thead')).toBeTruthy();
    expect(compiled.querySelector('tbody')).toBeTruthy();
  });

  it('should have the title in the head of the table', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('th').textContent).toEqual(component.title);
  });

  describe('ngOnInit', () => {
    it('should get the stats categories on initialization', () => {
      component.ngOnInit();

      expect(statsService.getStatsCategories).toHaveBeenCalled();
    });
  });

  describe('getStatsCategories', () => {
    it('should use the stats service to get the categories', (done) => {
      component.getStatsCategories(() => {
        expect(statsService.getStatsCategories).toHaveBeenCalled();
        done();
      });
    });

    it('should split the categories into groups of three', (done) => {
      const expectedCategoriesInThrees = [
        [
          {Id: 1, Abbreviation: 'FC', CategoryName: 'Fake Category'},
          {Id: 2, Abbreviation: 'CF', CategoryName: 'Category that is Fake'},
          {Id: 3, Abbreviation: 'FY', CategoryName: 'Fakey Fake'}
        ],
        [
          {Id: 4, Abbreviation: 'WFO', CategoryName: 'Whoa, another fake one'},
          {Id: 5, Abbreviation: 'WTF', CategoryName: 'What the Fake'},
          {Id: 6, Abbreviation: 'HIF', CategoryName: 'Hi, how are ya, I am fake'}
        ]
      ];

      component.getStatsCategories(() => {
        expect(JSON.stringify(component.statsCategoriesInThrees)).toEqual(JSON.stringify(expectedCategoriesInThrees));
        done();
      });
    });
  });
});
