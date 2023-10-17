import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router, private modalService: ModalService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.customerService.getCustomersObservable().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomer(id: number){
    this.modalService.showModalMethod('deleteModal');
    
    this.deleteService.emitDeleteCustomer(id);
  }
  
  editCustomer(id: number) {
    this.router.navigate(['/customer', id]);
  }
}
