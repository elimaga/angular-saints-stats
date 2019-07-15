import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import sinon from 'sinon';

import { KeyTableComponent } from './key-table.component';
import {StatsService} from '../stats.service';

describe('KeyTableComponent', () => {
  let component: KeyTableComponent;
  let fixture: ComponentFixture<KeyTableComponent>;

  class MockStatsService {
    getStatsCategories = sinon.spy();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyTableComponent ],
      providers: [
        { provide: StatsService, useClass: MockStatsService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Key'`, () => {
    const keyTable = fixture.debugElement.componentInstance;
    expect(keyTable.title).toEqual('Key');
  });

  it('should render the key table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should have the title in the head of the table', () => {
    const keyTable = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th').textContent).toEqual(keyTable.title);
  });
});
