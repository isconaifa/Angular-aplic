import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCredorComponent } from './pesquisa-credor.component';

describe('PesquisaCredorComponent', () => {
  let component: PesquisaCredorComponent;
  let fixture: ComponentFixture<PesquisaCredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaCredorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaCredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
