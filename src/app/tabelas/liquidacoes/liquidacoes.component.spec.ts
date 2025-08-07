import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacoesComponent } from './liquidacoes.component';

describe('LiquidacoesComponent', () => {
  let component: LiquidacoesComponent;
  let fixture: ComponentFixture<LiquidacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
