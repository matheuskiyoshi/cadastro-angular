import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FormComponent } from './pages/customer/components/form/form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "customer", component: CustomerComponent},
  { path: "customer/:id", component: FormComponent },
  { path: "login", component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
