import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreVencatComponent } from './add-more-vencat.component';

describe('AddMoreVencatComponent', () => {
  let component: AddMoreVencatComponent;
  let fixture: ComponentFixture<AddMoreVencatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoreVencatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreVencatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
