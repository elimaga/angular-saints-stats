import {TestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {AppComponent} from './app.component';
import {SaintsLogoComponent} from './saints-logo/saints-logo.component';
import {InstagramLogoComponent} from './instagram-logo/instagram-logo.component';
import {StatsTableComponent} from './stats-table/stats-table.component';
import {KeyTableComponent} from './key-table/key-table.component';
import {StatsService} from './stats.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SaintsLogoComponent,
        StatsTableComponent,
        KeyTableComponent,
        InstagramLogoComponent
      ],
      providers: [
        StatsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '2019 Spring Statistics'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('2019 Spring Statistics');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('2019 Spring Statistics');
  });

  it('should render the Saints logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-saints-logo')).toBeTruthy();
  });

  it('should render the Stats Table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-stats-table')).toBeTruthy();
  });

  it('should render the Key Table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-key-table')).toBeTruthy();
  });

  it('should render the Instagram logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-instagram-logo')).toBeTruthy();
  });
});
