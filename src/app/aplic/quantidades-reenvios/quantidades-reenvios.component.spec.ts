import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadesReenviosComponent } from './quantidades-reenvios.component';

describe('QuantidadesReenviosComponent', () => {
  let component: QuantidadesReenviosComponent;
  let fixture: ComponentFixture<QuantidadesReenviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantidadesReenviosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantidadesReenviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
