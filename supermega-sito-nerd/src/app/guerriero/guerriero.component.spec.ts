import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerrieroComponent } from './guerriero.component';

describe('GuerrieroComponent', () => {
  let component: GuerrieroComponent;
  let fixture: ComponentFixture<GuerrieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuerrieroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerrieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
