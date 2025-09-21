import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formhandling1 } from './formhandling1';

describe('Formhandling1', () => {
  let component: Formhandling1;
  let fixture: ComponentFixture<Formhandling1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formhandling1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formhandling1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
