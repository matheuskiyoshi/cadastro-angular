import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerService } from './services/customer.service';
import { ModalService } from './services/modal.service';
import { FormComponent } from './pages/customer/components/form/form.component';
import { SuccessDialogComponent } from './pages/customer/components/success-dialog/success-dialog.component';
import { CustomerRegisterComponent } from './pages/home/components/customer-register/customer-register.component';
import { DeleteDialogComponent } from './pages/home/components/delete-dialog/delete-dialog.component';
import { CustomerListComponent } from './pages/home/components/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    FormComponent,
    SuccessDialogComponent,
    CustomerRegisterComponent,
    DeleteDialogComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    CustomerService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
