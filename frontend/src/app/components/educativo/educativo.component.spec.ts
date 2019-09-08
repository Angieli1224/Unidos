import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativoComponent } from './educativo.component';

describe('EducativoComponent', () => {
  let component: EducativoComponent;
  let fixture: ComponentFixture<EducativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
