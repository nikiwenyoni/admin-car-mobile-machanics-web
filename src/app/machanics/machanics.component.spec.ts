import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachanicsComponent } from './machanics.component';

describe('MachanicsComponent', () => {
  let component: MachanicsComponent;
  let fixture: ComponentFixture<MachanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachanicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
