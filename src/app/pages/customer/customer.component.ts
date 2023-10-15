import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer | null = null;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customer = this.customerService.getSelectedCustomer();
  }

  saveCustomerChanges() {
    if (this.customer) {
      this.customerService.saveCustomer(this.customer);
      this.router.navigate(['/home']);
    }
  }
}
