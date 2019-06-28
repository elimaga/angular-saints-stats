import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLogoComponent } from './instagram-logo.component';

describe('InstagramLogoComponent', () => {
  let component: InstagramLogoComponent;
  let fixture: ComponentFixture<InstagramLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image of the logo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should be a link to the instagram page', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').title).toEqual("Follow us on Instagram");
  });
});
