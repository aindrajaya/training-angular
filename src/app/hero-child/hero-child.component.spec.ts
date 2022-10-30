import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildComponent } from './hero-child.component';

describe('HeroChildComponent', () => {
  let component: HeroChildComponent;
  let fixture: ComponentFixture<HeroChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
