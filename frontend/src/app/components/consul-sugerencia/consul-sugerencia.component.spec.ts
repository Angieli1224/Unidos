import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulSugerenciaComponent } from './consul-sugerencia.component';

describe('ConsulSugerenciaComponent', () => {
  let component: ConsulSugerenciaComponent;
  let fixture: ComponentFixture<ConsulSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
