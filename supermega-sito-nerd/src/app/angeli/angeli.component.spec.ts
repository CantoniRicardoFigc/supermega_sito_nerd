import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeliComponent } from './angeli.component';

describe('AngeliComponent', () => {
  let component: AngeliComponent;
  let fixture: ComponentFixture<AngeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngeliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
