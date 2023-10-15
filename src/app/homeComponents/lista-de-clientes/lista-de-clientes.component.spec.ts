import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeClientesComponent } from './lista-de-clientes.component';

describe('ListaDeClientesComponent', () => {
  let component: ListaDeClientesComponent;
  let fixture: ComponentFixture<ListaDeClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeClientesComponent]
    });
    fixture = TestBed.createComponent(ListaDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
