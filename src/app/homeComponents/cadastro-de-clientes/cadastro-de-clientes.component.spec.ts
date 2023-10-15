import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeClientesComponent } from './cadastro-de-clientes.component';

describe('CadastroDeClientesComponent', () => {
  let component: CadastroDeClientesComponent;
  let fixture: ComponentFixture<CadastroDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDeClientesComponent]
    });
    fixture = TestBed.createComponent(CadastroDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
