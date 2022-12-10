import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoountComponent } from './acoount.component';

describe('AcoountComponent', () => {
  let component: AcoountComponent;
  let fixture: ComponentFixture<AcoountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcoountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
