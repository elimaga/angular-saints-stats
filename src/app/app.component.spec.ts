import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SaintsLogoComponent } from './saints-logo/saints-logo.component';
import { InstagramLogoComponent } from './instagram-logo/instagram-logo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SaintsLogoComponent,
        InstagramLogoComponent
      ],
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

  it('should render the Instagram logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-instagram-logo')).toBeTruthy();
  });
});
