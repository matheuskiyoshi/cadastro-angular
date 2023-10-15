import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor() { }

  private deleteCustomerSource = new Subject<number>();
  deleteCustomer$ = this.deleteCustomerSource.asObservable();

  emitDeleteCustomer(id: number) {
    this.deleteCustomerSource.next(id);
  }
}
