import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FormularioComponent } from './customerComponents/formulario/formulario.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "customer", component: CustomerComponent},
  { path: 'customer/:id', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
