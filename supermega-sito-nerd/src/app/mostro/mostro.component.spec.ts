import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostroComponent } from './mostro.component';

describe('MostroComponent', () => {
  let component: MostroComponent;
  let fixture: ComponentFixture<MostroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
