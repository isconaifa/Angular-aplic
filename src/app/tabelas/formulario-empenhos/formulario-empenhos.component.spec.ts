import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpenhosComponent } from './formulario-empenhos.component';

describe('FormularioEmpenhosComponent', () => {
  let component: FormularioEmpenhosComponent;
  let fixture: ComponentFixture<FormularioEmpenhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEmpenhosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEmpenhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
