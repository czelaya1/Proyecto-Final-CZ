import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosFormComponent } from './quienes-somos-form.component';

describe('QuienesSomosFormComponent', () => {
  let component: QuienesSomosFormComponent;
  let fixture: ComponentFixture<QuienesSomosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesSomosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
