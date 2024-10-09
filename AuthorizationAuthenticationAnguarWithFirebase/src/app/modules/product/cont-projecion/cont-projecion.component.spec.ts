import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContProjecionComponent } from './cont-projecion.component';

describe('ContProjecionComponent', () => {
  let component: ContProjecionComponent;
  let fixture: ComponentFixture<ContProjecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContProjecionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContProjecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
