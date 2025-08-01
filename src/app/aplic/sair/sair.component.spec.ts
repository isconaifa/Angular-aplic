import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairComponent } from './sair.component';

describe('SairComponent', () => {
  let component: SairComponent;
  let fixture: ComponentFixture<SairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
