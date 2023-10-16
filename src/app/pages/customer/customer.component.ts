import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer | null = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getSelectedCustomer();
  }
}
