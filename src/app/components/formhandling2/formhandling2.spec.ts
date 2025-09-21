import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formhandling2 } from './formhandling2';

describe('Formhandling2', () => {
  let component: Formhandling2;
  let fixture: ComponentFixture<Formhandling2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formhandling2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formhandling2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
