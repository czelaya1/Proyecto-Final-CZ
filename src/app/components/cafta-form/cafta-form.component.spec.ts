import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaftaFormComponent } from './cafta-form.component';

describe('CaftaFormComponent', () => {
  let component: CaftaFormComponent;
  let fixture: ComponentFixture<CaftaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaftaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaftaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
