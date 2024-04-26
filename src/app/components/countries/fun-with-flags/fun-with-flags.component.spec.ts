import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithFlagsComponent } from './fun-with-flags.component';

describe('FunWithFlagsComponent', () => {
  let component: FunWithFlagsComponent;
  let fixture: ComponentFixture<FunWithFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunWithFlagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunWithFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
