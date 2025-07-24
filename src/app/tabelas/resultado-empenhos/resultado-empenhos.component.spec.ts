import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoEmpenhosComponent } from './resultado-empenhos.component';

describe('ResultadoEmpenhosComponent', () => {
  let component: ResultadoEmpenhosComponent;
  let fixture: ComponentFixture<ResultadoEmpenhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoEmpenhosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoEmpenhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
