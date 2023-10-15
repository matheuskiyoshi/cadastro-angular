import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { CadastroDeClientesComponent } from './homeComponents/cadastro-de-clientes/cadastro-de-clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ListaDeClientesComponent } from './homeComponents/lista-de-clientes/lista-de-clientes.component';
import { FormularioComponent } from './customerComponents/formulario/formulario.component';
import { DeleteDialogComponent } from './homeComponents/delete-dialog/delete-dialog.component';
import { SuccessDialogComponent } from './customerComponents/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroDeClientesComponent,
    HomeComponent,
    CustomerComponent,
    ListaDeClientesComponent,
    FormularioComponent,
    DeleteDialogComponent,
    SuccessDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
