import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodInfoComponent } from './apod-info.component';

describe('ApodInfoComponent', () => {
  let component: ApodInfoComponent;
  let fixture: ComponentFixture<ApodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
