import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {KeyTableComponent} from './key-table.component';
import {StatsService} from '../stats.service';

describe('KeyTableComponent', () => {
  let component: KeyTableComponent;
  let fixture: ComponentFixture<KeyTableComponent>;
  let statsService: StatsService;

  const fakeCategories = [
    {id: 1, abbreviation: 'FC', name: 'Fake Category'},
    {id: 2, abbreviation: 'CF', name: 'Category that is Fake'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    statsService = TestBed.get(StatsService);

    spyOn(statsService, 'getStatsCategories').and.returnValue(of(fakeCategories));
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
  });

  it('should have the title in the head of the table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th').textContent).toEqual(component.title);
  });

  describe('getStatsCategories', () => {
    it('should use the stats service to get the categories', () => {

      component.getStatsCategories();

      expect(statsService.getStatsCategories).toHaveBeenCalled();
    });
  });
});
