import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContProjectionChildComponent } from './cont-projection-child.component';

describe('ContProjectionChildComponent', () => {
  let component: ContProjectionChildComponent;
  let fixture: ComponentFixture<ContProjectionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContProjectionChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContProjectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
