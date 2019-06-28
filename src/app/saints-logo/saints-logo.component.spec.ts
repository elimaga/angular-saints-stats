import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintsLogoComponent } from './saints-logo.component';

describe('SaintsLogoComponent', () => {
  let component: SaintsLogoComponent;
  let fixture: ComponentFixture<SaintsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });
});
