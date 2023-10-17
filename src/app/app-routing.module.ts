import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FormComponent } from './pages/customer/components/form/form.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "customer", component: CustomerComponent},
  { path: 'customer/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
