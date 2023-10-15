import { Component, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @ViewChild('customerForm') customerForm: any;

  customer: Customer = {
  id: 0, 
  name: '',
  email: '',
  dateOfBirth: new Date(),
  };

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute, private modalService: ModalService) {
    this.route.paramMap.subscribe(params => {
      const customerId = params.get('id');
      if (customerId !== null) {
        const customerIdNumber = +customerId;
        if (!isNaN(customerIdNumber)) {
          const existingCustomer = this.customerService.getCustomerById(customerIdNumber);
          if (existingCustomer) {
            this.customer = { ...existingCustomer };
          }
        }
      }
    });
  }
  
  onSubmit() {
    if (this.customer) {
      this.modalService.showModalMethod('successModal');
      this.customerService.saveCustomer(this.customer);
      this.router.navigate([this.route.snapshot.url]);
    }
  }

  resetForm() {
    this.customer = {
      id: 0,
      name: '',
      email: '',
      dateOfBirth: new Date(),
    };
  }
}
