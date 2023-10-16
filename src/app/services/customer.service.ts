import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [];
  private customersSubject = new BehaviorSubject<Customer[]>([]);

  saveCustomer(customer: Customer) {
    if (!customer.id) {
      customer.id = this.generateUniqueId();
    }
  
    const existingCustomerIndex = this.customers.findIndex(cust => cust.id === customer.id);
  
    if (existingCustomerIndex !== -1) {
      this.customers[existingCustomerIndex] = customer;
    } else {
      const existingCustomer = this.customers.find(cust => cust.email === customer.email);
      if (existingCustomer) {
      } else {
        this.customers.push(customer);
      }
    }

    this.customersSubject.next(this.customers);
  }

  delete(id: number) {
    const index = this.customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    const maxId = this.customers.length > 0 ? Math.max(...this.customers.map(customer => customer.id)) : 0;
    return maxId + 1;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  private selectedCustomer: Customer | null = null;

  getSelectedCustomer(): Customer | null {
    return this.selectedCustomer;
  }

  getCustomersObservable() {
    return this.customersSubject.asObservable();
  }

}
